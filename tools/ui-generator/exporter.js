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
  @module Exporter
*/
const path = require('path');
const utils = require('./utils');
const fs = require('fs-extra');

/**
 * Saves the screens.js into state_state_machines folder
 * @param {string} name - Name of the project
 * @return {string} Path to the ouput directory
 */
function makeProjectDir(name, overwrite) {
  utils.mkdir('output')
  let projectPath = path.join('output', name);
  if (!overwrite)
    projectPath += Date.now();
  utils.mkdir(projectPath);
  return projectPath;
}

/**
 * Saves the artboards into it's views/pages folder
 * @param {string} projectPath - Path to the output folder
 * @param {Array.<{name:string, artboards:Array.<{name:string, code:string}>}>} pages
 */
function savePages(projectPath, pages) {
  let viewsPath = path.join(projectPath, "views");
  utils.mkdir(viewsPath);
  for (let i in pages) {
    let page = pages[i];
    if (page.artboards.length == 0)
      continue;
    let pagePath = path.join(viewsPath, page.name);
    utils.mkdir(pagePath);
    for (let j in page.artboards) {
      let artboard = page.artboards[j];
      utils.writeFile(path.join(pagePath, artboard.name + '.js'), artboard.code);
    }
  }
}

/**
 * Saves the components into components folder
 * @param {string} projectPath - Path to the output folder
 * @param {Array.<{name:string, code:string}>} components
 */
function saveComponents(projectPath, components) {
  let componentDir = path.join(projectPath, "components");
  utils.mkdir(componentDir);
  for (let i in components) {
    let component = components[i];
    let componentPath = path.join(componentDir, component.name);
    utils.mkdirs(path.dirname(componentPath));
    utils.writeFile(path.join(componentPath + '.js'),
      component.code);
  }
}

/**
 * Saves the screenMeta.js
 * @param {string} projectPath - Path to the output folder
 * @param {string} meta - Code for screenMeta.js
 */
function saveMeta(projectPath, meta) {
  utils.writeFile(path.join(projectPath, "screenMeta.js"), meta);
}

/**
 * Saves the screens.json used by webui to list the pages and artbaords
 * @param {string} projectPath - Path to the output folder
 * @param {object} duiScreens
 * @param {string} duiScreens.json - JSON dumped into screens.json (used by android)
 * @param {string} duiScreens.js - JSON dumped into screens_js.js (used by web)
 */
function exportDuiScreen(projectPath, duiScreens) {
  let duiScreensPath = path.join(projectPath, "screens.json");
  utils.writeFile(duiScreensPath, duiScreens);
}

function exportConfig(projectPath, code) {
  let configPath = path.join(projectPath, "globalConfig.js");
  utils.writeFile(configPath, code);
}

function exportStrings(projectPath, code) {
  let dir = path.join(projectPath, "res");
  utils.mkdir(dir);
  let stringsPath = path.join(dir, "strings.js");
  utils.writeFile(stringsPath, code);
}

function exportAccessibility(projectPath, code) {
  let dir = path.join(projectPath, "res");
  utils.mkdir(dir);
  let accessibilityPath = path.join(dir, "accessibility.js");
  utils.writeFile(accessibilityPath, code);
}

function exportController(projectPath, code) {
  let controlPath = path.join(projectPath, "controller");
  utils.mkdir(controlPath);
  let pagesPath = path.join(controlPath, "pages");
  utils.mkdir(pagesPath);
  for (let i in code.pages) {
    let page = code.pages[i];
    let pagePath = path.join(pagesPath, page.name);
    utils.mkdir(pagePath);
    for (let j in page.artboards) {
      let artboard = page.artboards[j];
      let artboardPath = path.join(pagePath, artboard.name + '.js')
      if (!fs.existsSync(artboardPath))
        utils.writeFile(artboardPath, artboard.code);
    }
  }

  let componentPath = path.join(controlPath, "components");
  utils.mkdir(componentPath);
  for (let i in code.symbols) {
    let symbol = code.symbols[i];
    let symbolPath = path.join(componentPath, symbol.name);
    utils.mkdirs(path.dirname(symbolPath));
    if (!fs.existsSync(symbolPath + '.js'))
      utils.writeFile(symbolPath + '.js', symbol.code);
}
}

/**
 * Helper used for saving the code by barbones and project
 * @param {string} projectPath - Path to the output folder
 * @param {object} code
 */
function exportCode(projectPath, code) {
  savePages(projectPath, code.pages);
  saveComponents(projectPath, code.components);
  saveMeta(projectPath, code.screenMeta);
  exportDuiScreen(projectPath, code.duiScreens);
  exportConfig(projectPath, code.globalConfig);
  exportController(projectPath, code.controller);
  exportStrings(projectPath, code.strings);
  exportAccessibility(projectPath, code.accessibility);
}

function commands(sketch, projectPath, isProject, pregelPath) {
  if (isProject) {
    pregelPath = path.resolve(pregelPath);
    utils.exec(`cp -r ${pregelPath}/views ${projectPath}`);
    utils.exec(`cp -r ${pregelPath}/dist ${projectPath}`);
    utils.exec(`cp ${pregelPath}/index.js ${projectPath}`);
    utils.exec(`cp ${pregelPath}/.babelrc ${projectPath}`);
    utils.exec(`ln -s ${pregelPath}/* ${projectPath}/.`);
  }
  if (fs.existsSync(`${projectPath}/dist/`)) {
    utils.exec(`cp -r ${sketch}/../*.png ${projectPath}/dist/`);
    utils.exec(`cp -r ${sketch}/images/ ${projectPath}/dist/`);
    utils.exec(`cp -r ${sketch}/../assets/*.png ${projectPath}/dist/`);
  }
}

/**
 * Saves only view, components, containers and state_machines to the file system.
 * @param {string}name - Name of the project
 * @param {object}code - Code
 */
function barebones(name, code, sketch, overwrite) {
  let projectPath = makeProjectDir(name, overwrite);
  commands(sketch, projectPath, false);
  exportCode(projectPath, code);
  utils.success("Successfully exported barebones", name,
    `path '${projectPath}'`);
  return projectPath;
}

/**
 * Saves the whole project along with boilerplate from presto-ui
 * @param {string} name - Name of the project
 * @param {object} code - Code generated by the generator
 * @param {string} sketch - Path to the unzipped sketch folder
 */
function project(name, code, sketch, overwrite, pregelPath) {
  let projectPath = makeProjectDir(name, overwrite);
  if (!fs.existsSync(pregelPath)) {
    utils.fatal("Invalid Path", pregelPath, "presto-ui path should be a directory");
  }
  commands(sketch, projectPath, true, pregelPath);
  // Dump images into dist folder
  exportCode(projectPath, code);
  utils.success("Successfully exported project", name, `path '${projectPath}'`);
  return projectPath;
}

module.exports = {
  barebones,
  project
};