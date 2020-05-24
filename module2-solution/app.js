(function (){

	'use strict';

	angular.module('listApp', [])
	.controller('BuyShoppingListController', BuyShoppingListController)
	.controller('BoughtShoppingListController', BoughtShoppingListController)
	.service('ShoppingListService', ShoppingListService);

		BuyShoppingListController.$inject = ['ShoppingListService'];

		function BuyShoppingListController (ShoppingListService){

			var buy =this;
			buy.List = ShoppingListService.BuyList();

			buy.BuyItem = function(index){
				ShoppingListService.BuyItem(index);
			}
		}

		BoughtShoppingListController.$inject = ['ShoppingListService'];

		function BoughtShoppingListController (ShoppingListService){

			var bought = this;
			bought.error =1;

			bought.List = ShoppingListService.BoughtList();


		}

		function ShoppingListService (){

			var service = this;

			var buyList = [
			{

				name: "Cookies",
				quantity: 10
			},
			{

				name: "Biscuit",
				quantity: 15
			},
			{

				name: "Pepto Bismol (Chocolate flavor)",
				quantity: 15
			},
			{

				name: "Donuts",
				quantity: 20
			},
			{

				name: "Chocolate",
				quantity: 30
			},
			{

				name: "Peanut Butter",
				quantity: 10
			},
			{

				name: "Pepto Bismol",
				quantity: 25
			},
			];

			var boughtList = [];

			service.BuyList = function() {
				return buyList;
			}

			service.BuyItem = function(index){

				var BoughtItem = buyList[index];
				boughtList.push(BoughtItem);

				buyList.splice(index, 1);
			}
	



			service.BoughtList = function (){
				return boughtList;
			}
			
		}

		






})();