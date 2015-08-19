var controllers = {};

controllers.MainController = function($scope, forecast) {
    $scope.$watch("city", function(newCity) {
        if(newCity) {
            forecast.getWeatherData(newCity).then(function (data) {
                $scope.tomorrow = data;
                $scope.tomorrowList = data.list;
                console.log($scope.tomorrowList);
            });

            forecast.getWeatherData2(newCity).then(function (data) {
                $scope.tomorrowList2 = data;
                console.log($scope.tomorrowList2);
            });

            forecast.getWeatherData3(newCity).then(function (data) {
                $scope.tomorrowList3 = data;
                console.log($scope.tomorrowList3);
            });
        };
    });
};

app.controller(controllers);
