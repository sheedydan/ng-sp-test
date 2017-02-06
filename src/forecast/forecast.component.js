import ForecastController from './forecast.controller';

//expose the component so it can be traversed by webpack
export default class ForecastComponent {
    constructor() {
        angular.module('weatherApp')
            .component('forecast', {
                //we require the template in so that webpack can traverse
                template: require('./forecast.html'),
                //our imported controller module
                controller: ForecastController
            });
    }
}