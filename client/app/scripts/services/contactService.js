'use strict';

angular.module('contactsApp')
	.factory('Contact', function($resource, $q, $location){
		var contactFactory = [];
		contactFactory.contacts = [];
		var resource = $resource('/api/contact/:id', {id: '@id'}, {
  			'update': {method: 'PUT'}
		});


		contactFactory.getContacts = function(){
			var defer = $q.defer();
			resource.query(function(data){
				contactFactory.contacts = data;
				defer.resolve();
			});
			return defer.promise;
		};

		contactFactory.show = function(id){
			$location.url('/contacts/' + id);
		};

		return contactFactory;
	});