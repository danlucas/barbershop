'use strict';

angular.module('barbershopApp')
  .controller('MainCtrl', function ($scope, Barbers) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.barbers = Barbers;
  });
