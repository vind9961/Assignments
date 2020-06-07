(function(){
	'use strict';
	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];
	function MenuDataService($http){
		var service = this;
		service.getCategory = function(){
		
				 return $http({
					method: 'GET',
					url: 'https://davids-restaurant.herokuapp.com/categories.json'
				});
		};

		service.getItem = function(shortName){
			return $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
				params: {
					category: shortName
				}
			});
		}

	}
})();