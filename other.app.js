angular.module('otherApp', [])
    .controller('OtherController', ['$scope', function($scope) {
        $scope.greetMe = 'Other';
    }]);

angular.element(function() {
    angular.bootstrap(document.getElementById("otherContainer"), ['otherApp']);
});