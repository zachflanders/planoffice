'use strict';

describe('Component: CaseEditComponent', function () {

  // load the controller's module
  beforeEach(module('wycokckApp'));

  var CaseEditComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CaseEditComponent = $componentController('CaseEditComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
