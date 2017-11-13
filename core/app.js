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

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

function checksum (str, algorithm, encoding) {
  return crypto
    .createHash(algorithm || 'md5')
    .update(str, 'utf8')
    .digest(encoding || 'hex')
}

app.get('/checksum', (req, res) => {
	fs.readFile(path.join(__dirname, 'dist/index_bundle.js'), function(error, data) {
			res.json({checksum : checksum(data, 'sha256')});
	});
})

app.get('/index_bundle.js.map', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index_bundle.js.map'))
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index_bundle.js'))
})

app.listen(3000, function () {
  console.log('Presto-Core running on port 3000');
});