var express = require('express');
var app = express();

var routes = require('./routes/route.js');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', routes.home);

var port = process.env.PORT || 3000;

var server = app.listen(port, '0.0.0.0', function () {
    console.log("Server running at http://0.0.0.0:" + port);
});