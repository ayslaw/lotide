const assert = require('chai').assert;
const assertEqual = require('../assertEqual');


describe("#assertEqual", () => {
  it("returns false for unequal strings", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it("returns true for equal strings", () => {
    assert.isTrue(assertEqual(1, 1)); 
  });
  it("returns false for unequal strings", () => {
    assert.isFalse(assertEqual(1,"1")); 
  });
});