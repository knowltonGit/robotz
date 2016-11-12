var myApp = angular.module('myApp', []);

myApp.controller("ContactController", function ($scope) {
    $scope.gtr = "HELLO";

    $scope.gtr2 = "DST";


}).directive('gamepiece2', function() {
    return {
        templateUrl: 'gamepieceTemplate.html'
};

});