var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index_prod.html");
})

app.use(express.static(__dirname));
app.listen(process.env.PORT || 8080);