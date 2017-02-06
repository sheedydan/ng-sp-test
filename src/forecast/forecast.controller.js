export default class ForecastController {
    // put your controller logic here!
    constructor($scope, $http) {
        $scope = this;
       
        $http.get('http://localhost:47898/api/Forecasts/GetForecast')
            .then(
                function(a) { $scope.forecasts = a.data; }).catch(function(a) { /* todo: throw error */ });
    }
}