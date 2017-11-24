# Presto-ui-generator

Presto-ui-generator is a commandline tool which converts the sketch artworks to a DUI project.
Currently, tool supports two level of generation:

 - `barebones`: Generates views and components only.
 - `project`: Generates complete presto-ui project.
***

# Prerequisite
 - `node & npm`
***
# Setup
 - `npm install`
***
# Usage
 - Generate barebones code:

 `./index.js --name testProject --path /path/to/sketch/folder`

 - Generate project code:

 `./index.js --name testProject --path /path/to/sketch/folder --project`

 - Generate project code and watch sketch file (for successive generation):

  `./index.js --name testProject --path /path/to/sketch/folder --run`

***
# Documentation
This project uses JSDoc for documentating modules, functions and important types.
##### Install
`npm install -g jsdoc`
##### Generate
`jsdoc -c jsdoc.config -r`

Open index.html in the out directory to see the documentation.
***
# Commit Style
Please follow this guide https://chris.beams.io/posts/git-commit/

