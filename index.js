var express = require('express');
var server = express();
var logger = require('./middleware/logger.js');
var cors = require('cors');
var axios = require('axios');

var port = process.env.PORT || 8081;

server.use(express.static(__dirname + '/public'));
server.use(logger);
server.use(cors());

server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/forecast/:lattitude,:longitude', function(request, response){
  var url = 'http://https://api.darksky.net/forecast/ff86bd244821f095a1f3670ce86ec492/37.8267,-122.4233';
  axios.get(url)
        .then(function(forecast){
          response.send(forecast.data);
        })
        .catch(function(error){
          response.send(error);
        });
});

server.listen(port, function(){
  console.log('Now listening on port');
});
