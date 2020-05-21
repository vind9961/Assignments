(function(){
	'use strict';

angular.module('CheckItem', [])
.controller('ItemController',CheckItemName);
   //CheckItemName.$inject = ['$scope'];


   function CheckItemName ($scope){

   	$scope.ItemName = "";
   	$scope.msg="";
   	$scope.ColorFromJs="";

   	$scope.SayForItem = function (){
   		var NumberOfItem = CalNumberOfItem ($scope.ItemName);
   


   	if(NumberOfItem < 3){
   		$scope.msg = "Enjoy!";
   		$scope.MsgStyle={
   			"color" : "green"

   		}
   		$scope.InputStyle = {
   			"border-color" : "green"
   		}
   		}
   	
   	if(NumberOfItem === 3){
   		$scope.msg = "Enjoy!";
   		$scope.MsgStyle={
   			"color" : "green"

   		}
   		$scope.InputStyle = {
   			"border-color" : "green"
   		}
   	}
   	if(NumberOfItem > 3){
   		$scope.msg = "Too much!";
   		$scope.MsgStyle={
   			"color" : "green"

   		}
   		$scope.InputStyle = {
   			"border-color" : "green"
   		}
   	}
   	if(NumberOfItem === 0) {
   		$scope.msg = "Please enter data first";
   		$scope.MsgStyle={
   			"color" : "red"

   		}
   		$scope.InputStyle = {
   			"border-color" : "red"
   		}
   	}
   	

   }


   	function CalNumberOfItem (string){
   		if(string == "")
   			return 0;
   		else{
   		var SpiltString = string.split(',');
   		return SpiltString.length;
   	}
   	}












}

   
   })();