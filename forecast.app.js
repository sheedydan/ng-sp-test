import angular from 'angular';

import ForecastComponent from './forecast.component';

angular.module('weatherApp', []);
new ForecastComponent();
angular.element(function() {
    angular.bootstrap(document.getElementById("weatherAppContainer"), ['weatherApp']);
});