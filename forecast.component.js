import ForecastController from './forecast.controller';

export default class ForecastComponent {
    constructor() {
        angular.module('weatherApp')
            .component('forecast', {
                template: require('./forecast.html'),
                controller: ForecastController
            });
    }
}