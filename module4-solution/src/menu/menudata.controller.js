(function(){
	'use strict';
	angular.module('data')
	.controller('categoryController', categoryController)
	.controller('itemController', itemController);

	categoryController.$inject = ['item'];
	function categoryController (item){
		var ctrl = this;
		ctrl.item = item.data;
		
	}

	itemController.$inject = ['itemDetail'];
	function itemController (itemDetail){
		var ctrl = this;
		ctrl.itemDetail = itemDetail.data.menu_items; 
			}


})();