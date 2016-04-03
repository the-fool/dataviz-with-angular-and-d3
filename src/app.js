angular
  .module('myApp', ['myChart'])
  .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $interval)
{
  var time = new Date('2016-01-01 00:00:00 +0200');

  var randPoint = function()
  {
    var rand = Math.random;

    return {
      time: time.toString(),
      visitors: rand()*100
    };
  }

  $scope.logs = [randPoint()];

  $interval( function()
  {
    time.setSeconds(time.getSeconds() + 1);
    $scope.logs.push(randPoint());
  }, 1000);

}
