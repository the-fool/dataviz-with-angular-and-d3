describe('my-scatter-chart', function() {
  var elm, scope;

  beforeEach(module('myChart'));

  beforeEach(inject(function($rootScope, $compile)
  {
    elm = angular.element('<my-scatter-chart class="chart" data="data"></my-scatter-chart>');

    scope = $rootScope.$new();
    scope.data = [];

    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should get tested', function() {

  });

  it('should create svg parent', function() {
    var svg = elm.find('svg');
    expect(svg.length).toBe(1);
  });

  it('should create containers for data and axis', function() {
    var groups = elm.find('svg').find('g');
    expect(groups.length).toBe(3);
  });

  it('should create a data point', function() {
    var circles = elm.find('svg').find('circle');
    expect(circles.length).toBe(0);

    scope.data.push({
      time: (new Date()).toString(),
      visitors: 3
    });
    scope.$digest();

    circles = elm.find('svg').find('circle');
    expect(circles.length).toBe(1);
  });

});
