(function(){
	'use strict';

	angular.module('data')
	.component('categoryComponent', {
		templateUrl: 'src/menu/template/category.component.html',
		bindings: {
			item: '<'
		}
	});

})();