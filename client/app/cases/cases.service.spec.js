'use strict';

describe('Service: cases', function () {

  // load the service's module
  beforeEach(module('wycokckApp.cases'));

  // instantiate service
  var cases;
  beforeEach(inject(function (_cases_) {
    cases = _cases_;
  }));

  it('should do something', function () {
    expect(!!cases).toBe(true);
  });

});
