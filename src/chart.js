( function (ng)
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

      var width = 600,
          height = 300;

      return postLink;

      function postLink(scope, element, attrs)
      {
        scope.$watch('data', function(newVal, oldVal, scope) {
          draw(svg, width, height, scope.data);
        }, true);
      }

      function draw(svg, width, height, data)
      {
        svg
          .attr('width', width)
          .attr('height', height);
        var margin = 30;

        var xScale = d3.time.scale()
          .domain([
            new Date(d3.min(data, function(d) { return d.time; })),
            new Date(d3.max(data, function(d) { return d.time; }))
          ])
          .range([margin, width - margin]);

        var xAxis = d3.svg.axis()
          .scale(xScale)
          .orient('top')
          .tickFormat(d3.time.format('%S'));

        var yScale = d3.time.scale()
          .domain([
            0,
            d3.max(data,function(d) {return d.visitors; })
          ])
          .range([margin, height - margin]);

        var yAxis = d3.svg.axis()
          .scale(yScale)
          .orient('left')
          .tickFormat(d3.format('f'));

        svg.select('.x-axis')
          .attr("transform", "translate(0, " + margin + ")")
          .call(xAxis);
        svg.select('.y-axis')
          .attr("transform", "translate(" + margin + ")")
          .call(yAxis);

        svg.select('.data')
          .selectAll('circle').data(data)
          .enter()
          .append('circle');

        svg.select('.data')
          .selectAll('circle').data(data)
          .attr('r', 2.5)
          .attr('cx', function(d) { return xScale(new Date(d.time));})
          .attr('cy', function(d) { return yScale(d.visitors);});

      }
    }
  }

})(angular);
