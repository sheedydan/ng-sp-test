export default class ForecastController {
    // put your controller logic here!
    // be a good developer and don't overload it.
    constructor($scope, $element, $attrs) {
        this.forecasts = [{
            iconClass: '12',
            precis: 'Partly cloudy.',
            dayOfTheWeek: 'Thursday',
            temp: '31'
        }, {
            iconClass: '12',
            precis: 'Partly cloudy.',
            dayOfTheWeek: 'Friday',
            temp: '33'
        }, {
            iconClass: '12',
            precis: 'Partly cloudy.',
            dayOfTheWeek: 'Saturday',
            temp: '35'
        }];
    }
}