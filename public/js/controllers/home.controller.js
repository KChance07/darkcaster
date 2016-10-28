(function() {
  angular.module('forecast-app')
    .controller("HomeController", HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope)($scope, WeatherService){
      $scope.getWeather = getWeather;

      function getWeather(latitude, longitude){
        console.log(WeatherService.getWeather());
      }
    }
}());
