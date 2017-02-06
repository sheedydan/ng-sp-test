// Importing Angular so we can reference it and webpack knows about it
import angular from 'angular';

// Importing component
import ForecastComponent from './src/forecast/forecast.component';

// Initialising angular module
angular.module('weatherApp', []);

// newing up our component to add it to the module
new ForecastComponent();
angular.element(function() {
    angular.bootstrap(document.getElementById("weatherAppContainer"), ['weatherApp']);
});