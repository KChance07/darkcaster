var express = require('express');
var server = express();
var logger = require('./middleware/logger.js');

var port = process.env.PORT || 8081;

server.use(express.static(__dirname + '/public'));
server.use(logger);

server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port');
});
