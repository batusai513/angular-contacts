'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
