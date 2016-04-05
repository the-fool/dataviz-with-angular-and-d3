angular
  .module('myApp', ['myChart'])
  .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, d3, SimpleD3Loader)
{
  $scope.log = {
    src: 'files/access.log',
    data: ''
  };
  SimpleD3Loader($scope.log.src, function(data)  {
    $scope.log.data = data;
    $scope.$digest();
  });

}
