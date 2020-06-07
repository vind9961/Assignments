(function(){
	'use strict';
	angular.module('myApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'src/menu/template/home.html'
		})
		.state('category', {
			url: '/categories',
			templateUrl: 'src/menu/template/category.html',
			controller: 'categoryController as category',
			resolve: {
				item: ['MenuDataService', function(MenuDataService){
					return MenuDataService.getCategory();

				}]
			}
		})
		.state('item', {
			url: '/item{itemShortName}',
			templateUrl: 'src/menu/template/item.html',
			controller: 'itemController as items',
			resolve: {
				itemDetail: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
					return MenuDataService.getItem($stateParams.itemShortName);
				}]
			}
		});
	}
})();