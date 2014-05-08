var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
	$scope.toJSON = function(obj) {
		return JSON.stringify(obj, null, 2);
	};
	$scope.canSave = function() {
		return $scope.userInfoForm.$dirty && $scope.userInfoForm.$valid;
	};
});