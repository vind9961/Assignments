(function(){
	'use strict';
	angular.module('public')
	.controller('infoController', infoController);

	infoController.$inject = ['clientService'];

	function infoController (clientService){
		var ctrl = this;

		ctrl.name = clientService.name;
		ctrl.email = clientService.email;
		ctrl.phone = clientService.phone;

		ctrl.menuItem = clientService.menuItem;
		

		if(ctrl.menuItem == undefined){
			ctrl.signUp = false;
			ctrl.findItem = true;
		}

		else if(ctrl.menuItem.length == 0){
			ctrl.findItem = false;
			ctrl.signUp = true;
		}
		else{
			ctrl.signUp = true;
			ctrl.findItem = true;
		}
		
	}

})();