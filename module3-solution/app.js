(function () {

	angular.module('app', [])
	.controller('narrowItDownForMe',narrowItDownForMe)
	.service('menuSearchService',menuSearchService)
	.directive('foundItems', foundItems);

	function foundItems (){

		var ddo = {
			templateUrl: 'item.html',
			scope: {
				items: '<',
				onRemove: '&'
			}
		};

		return ddo;
	}


	narrowItDownForMe$inject = ['menuSearchService', '$timeout'];
	function narrowItDownForMe(menuSearchService, $timeout){

		var ctrl = this;
		ctrl.foundItem = [];
		ctrl.foundItem.length = 0;
		ctrl.n = 1;
	
		ctrl.searchTerm = "";

		ctrl.getMatchedMenuItems = function (){
			ctrl.foundItem.length = 0;
			var response = menuSearchService.getMatchedMenuItems();
			response.then(function(result){
				var t=0;
				if(ctrl.searchTerm.length !=0){

					for(var i=0;i<result.data.menu_items.length;i++){
					if(result.data.menu_items[i].description.indexOf(ctrl.searchTerm) !== -1) {
					ctrl.foundItem[t] = result.data.menu_items[i];
					t++;
					}
				}
			}



			});

			ctrl.find();

		};


		ctrl.removeItem = function(index){

			ctrl.foundItem.splice(index, 1);
		};
		ctrl.find = function(){$timeout(function(){ctrl.n = ctrl.foundItem.length;},4000)
			
		}


	}
		


	menuSearchService.$inject = ['$http'];
	function menuSearchService ($http){

		var service = this;
		service.getMatchedMenuItems = function(){
			var response = $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/menu_items.json",
			
			});
			return response;
		};

	}


})();