angular.module('flagApp', [])
.controller('MainController', function($scope, $http) {
  $scope.candidate = {};
  $scope.flags = [];
  // Auto-load form data from localStorage
  if (localStorage.getItem("candidateData")) {
    $scope.candidate = JSON.parse(localStorage.getItem("candidateData"));
  } else {
    $scope.candidate = {}; // default if nothing saved
  }

  // Auto-save form to localStorage whenever it changes
  $scope.$watch('candidate', function(newVal) {
    localStorage.setItem("candidateData", JSON.stringify(newVal));
  }, true);


  $scope.evaluate = function() {
    $http.post('http://localhost:3000/evaluate', $scope.candidate)
      .then(res => {
        $scope.flags = res.data.flags;
      });
  };

  $scope.override = function(flag) {
    flag.message += ' (Overridden)';
    flag.severity = 'none';
  };
});
