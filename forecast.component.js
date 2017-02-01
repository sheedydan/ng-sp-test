angular
    .module('app')
    .component('forecast', {
        template: '<div class="col-sm-4 details" ng-repeat="forecast in $ctrl.forecasts">' +
            '<div class="icon {{forecast.iconclass}}></div>' +
            '<span class="temp">{{forecast.temp}}</span>' +
            '<p class="day">{{forecast.dayOfTheWeek}}<span class="temp">{{forecast.precis}}</span></p>' +
            '</div>',
        controller: function ForecastController() {
            this.forecasts = [{
                iconClass: '',
                precis: 'The weather is hot.',
                dayOfTheWeek: 'Wednesday',
                temp: '34'
            }, {
                iconClass: '12',
                precis: 'The weather is hot.',
                dayOfTheWeek: 'Thursday',
                temp: '34'
            }];
        }
    });