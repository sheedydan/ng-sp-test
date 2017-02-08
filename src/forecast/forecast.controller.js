// import ForecastService from './src/forecast/forecast.service';

export default class ForecastController {
    // put your controller logic here!
    constructor($scope, $http, ForecastService) {
        $scope = this;
        this.forecasts = [{
            IconClass: '12',
            Precis: 'Partly cloudy.',
            Day: 'Thursday',
            MaxTemp: '31'
        }, {
            IconClass: '12',
            Precis: 'Partly cloudy.',
            Day: 'Friday',
            MaxTemp: '33'
        }, {
            IconClass: '12',
            Precis: 'Partly cloudy.',
            Day: 'Saturday',
            MaxTemp: '35'
        }];
        // $http.get('http://localhost:47898/api/Forecasts/GetForecast')
        //     .then(
        //         function(a) { $scope.forecasts = a.data; }).catch(function(a) { /* todo: throw error */ });
    }
}