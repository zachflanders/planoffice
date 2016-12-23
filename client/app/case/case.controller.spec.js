'use strict';

describe('Component: CaseComponent', function () {

  // load the controller's module
  beforeEach(module('wycokckApp'));

  var CaseComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CaseComponent = $componentController('CaseComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
