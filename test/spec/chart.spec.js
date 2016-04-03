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


});
