angular.module('olympicPicker').controller('SyncSwimController', function($scope, DataService){
  $scope.data = DataService.data;
});
