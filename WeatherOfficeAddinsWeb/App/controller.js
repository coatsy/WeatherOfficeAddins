var weatherApp = angular.module('weatherApp', ['weatherFilters']);


weatherApp.controller('WeatherCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.title = 'Weather';
    $scope.city = '';
    $scope.dataExists = false;

    $scope.doSearch = function () {
        alert('Searching');
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.city).success(function (data) {
            $scope.weather = data;
            $scope.dataExists = true;
        });

        $scope.insertWeather = function () {
            console.log('inserting weather\n');
        };

    };

}]);
