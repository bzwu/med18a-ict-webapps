var express = require('express');
bodyParser = require('body-parser');
var app = express();


var appPort = 3006; 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

app.listen(appPort, () => {
  console.log('Example app listening on port ' + appPort + '!');
});
exports.service = app;