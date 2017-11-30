#!/usr/bin/env node
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

/**
  @module init
*/
const fs = require('fs');
const path = require('path');
const argumentParser = require('argparse').ArgumentParser;
const watch = require('node-watch');

const parse = require('./parser');
const generator = require('./generator');
const exporter = require('./exporter');
const utils = require('./utils')

const sketchRegex = /^.*\.sketch$/;
const jsonRegex = /^.*\.sketch.json$/;

const time = () => (new Date()).getTime();

function setupArgparse() {
  let parser = new argumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Converts sketch artworks to DUI project'
  });
  parser.addArgument(['-n', '--name'], {
    help: "Name of the project",
    required: true
  });
  parser.addArgument(['-p', '--path'], {
    help: "Path to the folder containing .sketch and .json files",
    required: true
  });
  parser.addArgument(['--pregel'], {
    help: "Path to presto-ui-sample",
    defaultValue: __dirname + "/presto-sample/"
  });
  parser.addArgument(['--prod'], {
    help: "Production ready project",
    action: "storeTrue"
  });
  parser.addArgument(['--project'], {
    help: "export complete project",
    action: "storeTrue"
  });
  parser.addArgument(['-o', '--overwrite'], {
    help: "Overwrite on the existing project",
    action: "storeTrue"
  });
  parser.addArgument(['-w', '--watch'], {
    help: "Watch sketch file",
    action: "storeTrue"
  });
  parser.addArgument(['--run'], {
    help: "Watch and run the project",
    action: "storeTrue"
  });

  let args = parser.parseArgs();
  if (args.run) {
    args.project = true;
    args.watch = true;
    args.overwrite = true;
  }
  return args;
}

// Globals
/**
 * @typedef {Object} Paths
 * @property {string} config Path to the config file
 * @property {string} sketch Path to the extracted sketch folder
 */

/**
 * @global
 * @typedef {Object} Symbol
 * @property {string} name - Name of the symbol
 * @property {View} view - View of the symbol
 */

/**
 * @global
 * @typedef {Object} Artboard
 * @property {string} name - Name of the symbol
 * @property {View} view - View of the symbol
 */

/**
 * @global
 * @typedef {Object.<string, Symbol>} SymbolTable - Map of objectId to Symbol
 */


/**
 * Checks the presence of .sketch & config.json then unzips .sketch
 * @param {string} filepath - Path to the folder containing .sketch and .json file
 * @return {Paths} paths
 */
function extractSketch(filepath) {
  // Verify files and path
  if (!fs.existsSync(filepath))
    utils.fatal("Invalid path", filepath,
      "path should be a folder containing *.sketch and *.json");

  let files = fs.readdirSync(filepath);
  let sketchFile = files.filter((name) => sketchRegex.test(name));
  let configFile = files.filter((name) => jsonRegex.test(name));
  if (sketchFile.length > 1 || sketchFile.length == 0)
    utils.fatal("Invalid path", filepath, "path has zero or many *.sketch file");
  if (configFile.length > 1 || configFile.length == 0)
    utils.fatal("Invalid path", filepath, "path has zero or many *.json file");
  sketchPath = path.join(filepath, sketchFile[0]);
  configPath = path.join(filepath, configFile[0]);
  sketchFolderPath = path.join(filepath, "sketch");

  let code = utils.exec(`unzip -o ${sketchPath} -d ${sketchFolderPath}`);
  if (code != 0)
    utils.fatal("Extraction failed", sketchPath,
      "Please verify the sketchPath");

  return {
    "config": configPath,
    "sketch": sketchFolderPath
  };
}

function helper(args) {
  let startTime = time();
  let paths = extractSketch(args.path);
  let config = utils.parseJSONFile(paths.config);
  let data = parse(args.name, paths.sketch, config, args.prod);
  let parseTime = time();
  utils.success("Completed", "Parse", "time elapased - " + (parseTime -
    startTime) / 1000 + "s");

  let code = generator(data);
  utils.success("Completed", "Generation", "time elapased - " + (time() -
    parseTime) / 1000 + "s");
  if (!args.project)
    return exporter.barebones(args.name, code, paths.sketch, args.overwrite);
  return exporter.project(args.name, code, paths.sketch, args.overwrite, args
      .pregel);
}

/**
 * Entry point into the sketch2dui tool
 */
function init() {
  let args = setupArgparse();
  let output = helper(args);

  if (args.run) {
    utils.exec2("npm start --prefix " + output);
  }

  if (!args.watch)
    return;

  let lasttime = Date.now();
  args.project = false;
  watch(args.path, {}, function (evt, name) {
    if (!name.endsWith(".json"))
      return;
    if (Date.now() - lasttime < 2000)
      return;
    lasttime = Date.now();
    helper(args);
  });
}

init();