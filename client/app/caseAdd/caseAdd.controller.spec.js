'use strict';

describe('Component: CaseAddComponent', function () {

  // load the controller's module
  beforeEach(module('wycokckApp'));

  var CaseAddComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CaseAddComponent = $componentController('CaseAddComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
