const packageJSON = require("../package.json") 
const fs = require('fs');
const path = require('path');
const actualVersion = JSON.stringify(packageJSON.version)
const directoryPath = path.join(__dirname, '../src');

function replaceVersion(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${filePath}`);
      return;
    }

    const updatedData = data.replace(/__VERSION__/g, actualVersion);

    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file: ${filePath}`);
      }
    });
  });
}

function traverseDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${directoryPath}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error getting file stats: ${filePath}`);
          return;
        }

        if (stats.isFile() && path.extname(file) === '.js') {
          replaceVersion(filePath);
        } else if (stats.isDirectory()) {
          traverseDirectory(filePath);
        }
      });
    });
  });
}

traverseDirectory(directoryPath);
