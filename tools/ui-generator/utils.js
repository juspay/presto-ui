/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

const path = require('path');
const fs = require('fs-extra');
const colors = require('colors');
const proc = require('child_process');

const alphaRegex = /[A-z]/i;

function pathExists(filepath) {
  if (!fs.existsSync(filepath)) {
    throw Error("Invalid file/folder path:" + filepath);
  }
}

function exec(cmd) {
  try {
    proc.execSync(cmd, {stdio:[null, null, null]});
    return 0;
  } catch (e) {
    return 1;
  }
}

function exec2(cmd) {
  try {
    let child_proc = proc.exec(cmd);
    child_proc.stdout.pipe(process.stdout);
    child_proc.stderr.pipe(process.stderr);
    process.on('exit', function () {
      child_proc.kill();
    });
    return 0;
  } catch (e) {
    return 1;
  }
}

function mkdir(path) {
  if (!fs.existsSync(path))
    fs.mkdirSync(path);
}

function mkdirs(path) {
  if (!fs.existsSync(path))
    fs.mkdirsSync(path);
}

function readFile(filepath, defaultValue) {
  try {
    pathExists(filepath);
  } catch(e) {
    if (defaultValue)
      return defaultValue;
    throw e;
  }
  return fs.readFileSync(filepath, "utf8");
}

function writeFile(path, data) {
  fs.writeFileSync(path, data);
}

function parseJSONFile(filepath, defaultValue) {
  let rawdata = readFile(filepath, defaultValue);
  try {
    let data = JSON.parse(rawdata);
    return data;
  } catch (e) {
    throw Error('Failed to JSON parse file: ' + filepath);
  }
}

function pad(n, width, prefix) {
  prefix = prefix || '0';
  let len = (n + '').length;
  return (len >= width) ? n : prefix.repeat(width - len) + n;
}

function rgb2hex(obj, withoutAlpha) {
  let red = parseInt(obj.red * 255).toString(16);
  let green = parseInt(obj.green * 255).toString(16);
  let blue = parseInt(obj.blue * 255).toString(16);
  let alpha = parseInt(obj.alpha * 255).toString(16);
  let value = pad(red, 2) + pad(green, 2) + pad(blue, 2);
  if (!withoutAlpha)
    return "#" + pad(alpha, 2) + value;
  return "#" + value;
}

function rgb2hexText(obj) {
  let red = parseInt(obj.r * 255).toString(16);
  let green = parseInt(obj.g * 255).toString(16);
  let blue = parseInt(obj.b * 255).toString(16);
  let alpha = parseInt(obj.a * 255).toString(16);
  return "#" + pad(alpha, 2) + pad(red, 2) + pad(green, 2) + pad(blue, 2);
}

function logFormat(type, prefix, name, suffix) {
  let msg = '' + prefix + ' `' + name + '`: ' + suffix;
  switch (type) {
  case "warn":
    console.warn(msg.yellow);
    break;
  case "error":
    console.error(msg.red);
    break;
  case "success":
    console.log(msg.green);
    break;
  case "fatal":
    console.log(msg.red);
    console.log("Program exiting...");
    process.exit(1);
  default:
    console.log(msg.grey);
  }
}

function indent(str, tabs) {
  return '\t'.repeat(tabs) + str;
}

function escape(str, removeSlash) {
  if (typeof str == "string") {
    str = str.trim();
    if(!alphaRegex.test(str.charAt(0))){
      str = "a_" + str;
    }
    str = str.charAt(0).toUpperCase() + str.slice(1);
    if (removeSlash)
      return str.replace(/[^a-zA-Z0-9]/g, "_");
    return str.replace(/[^a-zA-Z0-9/]/g, "_");
  }
  return str;
}

function pathDiff(curr, to) {
  let currPath = curr.split('/');
  let toPath = to.split('/');
  let i;
  for (i = 0; i < currPath.length; i++) {
    if (currPath[i] == toPath[i])
      continue;
    break;
  }
  return '../'.repeat(currPath.length - i - 1) + toPath.join('/');
}

module.exports = {
  pathExists,
  readFile,
  writeFile,
  parseJSONFile,
  rgb2hex,
  pad,
  indent,
  escape,
  pathDiff,
  mkdir,
  mkdirs,
  rgb2hexText,
  exec,
  exec2,
  error: (...args) => logFormat("error", ...args),
  success: (...args) => logFormat("success", ...args),
  warn: (...args) => logFormat("warn", ...args),
  fatal: (...args) => logFormat("fatal", ...args)
};