(function(){
	'use strict';
	angular.module('data')
	.component('itemComponent', {
		templateUrl: 'src/menu/template/item.component.html',
		bindings: {
			item: '<'
		}
	});
})();