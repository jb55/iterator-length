'use strict';

var expect = require('expect.js')
var length = require('./');

describe('iterator-length', function(){
  it('one yield results in 1', function(){
    function* one() { yield 1; }
    expect(length(one())).to.be(1);
  });

  it('zero yields results in 0', function(){
    function* zero() { } 
    expect(length(zero())).to.be(0);
  });
});
