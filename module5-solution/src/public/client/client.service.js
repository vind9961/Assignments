(function(){
	'use strict';
	angular.module('public')
	.service('clientService', clientService);

	clientService.$inject = ['$http', 'ApiPath'];
	function clientService ($http, ApiPath){
		var service = this;
		
		service.store = function(firstName, lastName, email, phone, menuName){

              service.name = firstName +" "+ lastName;
              service.email = email;
              service.phone = phone;
              service.menuName = menuName;

              var add = service.menuName + '.json';


              $http.get(ApiPath + '/menu_items/'+ add).then(function (response) {
      
               service.menuItem = response.data;
               })
              .catch(function(error){
                service.menuItem = '';
              });

     };   
	}
})();