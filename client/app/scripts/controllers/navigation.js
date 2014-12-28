'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the contactsApp
 */

 angular.module('contactsApp')
  .controller('navigationCtrl', function ($scope, $location) {
	$scope.isActive = function (viewLocation) {
	     var active = (viewLocation === $location.path());
	     return active;
	};
  });