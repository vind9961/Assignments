(function(){
	'use strict';
	angular.module('public')
	.component('menuItems', {
		templateUrl: 'src/public/info/infoComponent.html',
		bindings: {
			menu: '<'
		}
	});

})();