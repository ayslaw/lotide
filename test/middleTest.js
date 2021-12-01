const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

describe("#middle", () => {
    it("returns [2, 3] for [1, 2, 3, 4]", () => {
      assert.deepEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
    });
  
    it("returns [2] for [1, 2, 3]", () => {
      assert.deepEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
    });
  
    it("returns [5] for [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
      assert.deepEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]));
    });
  });
