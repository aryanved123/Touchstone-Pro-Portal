angular.module('flagApp', [])
.controller('MainController', function($scope, $http) {
  $scope.candidate = {};
  $scope.flags = [];

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
