'use strict';

describe('Service: Barbers', function () {

  // load the service's module
  beforeEach(module('barbershopApp'));

  // instantiate service
  var Barbers;
  beforeEach(inject(function (_Barbers_) {
    Barbers = _Barbers_;
  }));

  it('should do something', function () {
    expect(!!Barbers).toBe(true);
  });

});
