var express = require('express');
var hbs = require('hbs');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);

app.use(express.static(__dirname + "/../dist"));

app.get('/', function (req, res) {
  res.render('index')
});

var server = app.listen(5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});