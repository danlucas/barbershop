'use strict';

angular.module('barbershopApp')
  .factory('Barbers', function () {
    // Service logic
    // ...

    var Barbers = [
      {
        name : 'Dan Lucas',
        specialties : ['crew cut', 'fade']
      },
      {
        name : 'Dawne Lucas',
        specialties : ['pixie cut', 'coloring']
      },
      {
        name : 'Maya Lucas',
        specialties: ['curly hair', 'natural look']
      }
    ];

    // Public API here
    return Barbers;
  });
