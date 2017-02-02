angular.module('myApp', [])
    .controller('MyController', function($scope) {
        $scope.greetMe = 'sdfdsf';
    });

angular.element(function() {
    angular.bootstrap(document.getElementById("appContainer"), ['myApp']);
});