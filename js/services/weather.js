app.factory("forecast", ["$http", "$q", function($http, $q) {
    var runRequests = {};

    runRequests.getWeatherData = function (city) {
        var deferred = $q.defer();

        $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+ city + "&mode=json&cnt=2&units=metric", { cache: true })
        .then(function(response) {
            deferred.resolve(response.data);
        }, function(err) {
            return "Error retrieving data";
            deferred.reject(err);
        });

        return deferred.promise;
    };

    runRequests.getWeatherData2 = function (city) {
        var deferred = $q.defer();

        $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+ city +"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", { cache: true })
        .then(function(response) {
            deferred.resolve(response.data.query.results.channel.item.forecast);
        }, function(err) {
            return "Error retrieving data";
            deferred.reject(err);
        });

        return deferred.promise;
    };

    runRequests.getWeatherData3 = function (city) {
        var deferred = $q.defer();

        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?key=8aca61b243b873529b9039f466bf7&q="+ city +"&num_of_days=2&tp=3&format=json", { cache: true })
        .then(function(response) {
            deferred.resolve(response.data.data.weather);
        }, function(err) {
            return "Error retrieving data";
            deferred.reject(err);
        });

        return deferred.promise;
    };

    return runRequests;
}]);
