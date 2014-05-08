var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  // This method is here so that we can display the full JSON of the passed in object
  // The built in json filter removes anything starting with a $ so you don't get to see the
  // $dirty, $pristine, etc flags
  $scope.toJSON = function(obj) {
    return JSON.stringify(obj, null, 2);
  };

  $scope.getCssClasses = function(ngModelController) {
    return {
      error: ngModelController.$invalid && ngModelController.$dirty,
      success: ngModelController.$valid && ngModelController.$dirty
    };
  }

  $scope.showError = function(ngModelController, error) {
    return ngModelController.$error[error];
  };
});