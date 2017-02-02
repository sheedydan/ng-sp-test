// Importing Angular so we can reference it and webpack knows about it
import angular from 'angular';

// Importing component
import ForecastComponent from './forecast.component';

// Initialising angular module
angular.module('weatherApp', []);

// newing up our component to add it to the module
// Todo: see if this is the best way to add the component 
// to the module. This smells a bit.
new ForecastComponent();
angular.element(function() {
    angular.bootstrap(document.getElementById("weatherAppContainer"), ['weatherApp']);
});