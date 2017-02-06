export default class ForecastController {
    // put your controller logic here!
    constructor($scope, $http) {
        // this.$http = $http
        this.data = "test";
        $scope.data = this.data;
        $http.get('http://localhost:47898/api/Forecasts/GetForecast')
            .then(
                function(a) { $scope.data = "test" }).catch(function(a) { console.log(a); });


        this.forecasts = [{
            "MaxTemp": "31",
            "Precis": "Mostly sunny",
            "IconClass": "sun-cloud",
            "Day": "Friday"
        }, {
            "MaxTemp": "34",
            "Precis": "Possible afternoon shower.",
            "IconClass": "sun-cloud",
            "Day": "Saturday"
        }, {
            "MaxTemp": "31",
            "Precis": "Mostly sunny",
            "IconClass": "sun-cloud",
            "Day": "Sunday"
        }]
    }
}