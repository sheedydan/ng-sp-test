export default class ForecastService {
    constructor($scope, $http) {
        $scope = this;

        return $http.get('http://localhost:47898/api/Forecasts/GetForecast')
            .then(
                function(a) { $scope.forecasts = a.data; }).catch(function(a) { /* todo: throw error */ });
    }

}