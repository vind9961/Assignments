(function(){
	'use strict';

	angular.module('public')
	.controller('signupController', signupController);

	signupController.$inject = ['clientService', '$rootScope', '$http', 'ApiPath'];
	function signupController (clientService, $rootScope, $http, ApiPath){
		var reg = this;
		var listener;

		reg.checkMenu = function(){

			reg.check = true;

			if(reg.user.menuNumber){
				var add = reg.user.menuNumber + '.json';
				$http.get(ApiPath + '/menu_items/'+ add).then(function (response) {
      
               reg.check = false;
               })
              .catch(function(error){
                reg.check = true;
              });

			}
			else{
				reg.check = false;

			}

          }


		reg.submit = function(){
			clientService.store(reg.user.firstName, reg.user.lastName, reg.user.email, reg.user.phone, reg.user.menuNumber);
			reg.completed = true;


		}


		reg.$onInit = function() {
            reg.show = false;
             listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
         };

        reg.$onDestroy = function() {
            listener();
        };

       function onSpinnerActivate(event, data) {
           reg.show = data.on;
       }
}

})();