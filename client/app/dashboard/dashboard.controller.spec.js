'use strict';

describe('Component: DashboardComponent', function () {

  // load the controller's module
  beforeEach(module('wycokckApp'));

  var DashboardComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DashboardComponent = $componentController('DashboardComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
