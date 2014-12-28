'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('ContactCtrl', function ($scope, Contact) {
  	$scope.contacts = Contact.contacts;

  	Contact
  		.getContacts()
  		.then(function(){
  			$scope.contacts = Contact.contacts;
  		});

  	$scope.fields = ['firstName', 'lastName'];
  	$scope.sort = function(field){
  		$scope.sort.field = field;
  		$scope.sort.order = !$scope.sort.order;
  	};
  	$scope.showContact = function(id){
  		Contact.show(id);
  	};
  	$scope.sort.field = 'firstName';
  	$scope.sort.order = false;
  });
