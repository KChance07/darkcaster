(function() {
  angular.module('forecast-app')
    .factory('WeatherService', WeatherService);

  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var secretToken = {
      secret: 'its a secret'
    };
    var latitude;
    var longitude;
    var weatherData = [];
    return {
      weatherData: weatherData,
      getWeather: getWeather
    };

    function getWeather(){
      return $http.get('/forecast/29,-82');
    }
  }
}());
