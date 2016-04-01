( (ng) =>
{
  'use strict';

  ng
    .module('myChart', [])
    .service('d3', function()
    {
      return d3;
    })
    .directive('myScatterChart', myScatterChart);

  function myScatterChart(d3)
  {

    return {
      restrict: 'E',
      scope:
      {
        data: '='
      },
      compile: compile
    };

    function compile ( tElement, tAttrs)
    {
      var svg = d3.select(tElement[0]).append('svg');

      svg.append('g').attr('class', 'data');
      svg.append('g').attr('class', 'x-axis axis');
      svg.append('g').attr('class', 'y-axis axis');

      var width = 600, height 300;

      function postLink(scope, element, attrs)
      {
        scope.$watch('data', function(newVal, oldVal, scope) {
          draw(svg, width, height, scope.data);
        }, true);
      }

      return postLink;
    }

    function draw(svg, width, height, data)
    {

    }
  }

})(angular);
