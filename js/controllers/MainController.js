app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    $scope.$watch("city", function(newCity, city, scope) {
        if(newCity === city) {
            forecast.getWeatherData(city).then(function (data) {
                $scope.tomorrow = data;
                $scope.tomorrowList = data.list;
            });

            forecast.getWeatherData2(city).then(function (data) {
                $scope.tomorrowList2 = data;
            });

            forecast.getWeatherData3(city).then(function (data) {
                $scope.tomorrowList3 = data;
            });
        } else {
            forecast.getWeatherData(newCity).then(function (data) {
                $scope.tomorrow = data;
                $scope.tomorrowList = data.list;
            });

            forecast.getWeatherData2(newCity).then(function (data) {
                $scope.tomorrowList2 = data;
            });

            forecast.getWeatherData3(newCity).then(function (data) {
                $scope.tomorrowList3 = data;
            });
        };
    });
}]);
