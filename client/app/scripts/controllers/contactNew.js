'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:ContactNewCtrl
 * @description
 * # ContactNewCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('ContactNewCtrl', function ($scope, Contact) {
  	$scope.contact = Contact.newContact;

    $scope.save = function(isValid, contact){
      if(isValid){
        console.log(contact);
      }
      //Contact.new(data);
    };

  });
