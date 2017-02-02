export default class ForecastController {
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