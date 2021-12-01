const assert = require('chai').assert;
const tail   = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
describe("#tail", () => {
  it("returns 2 for length", () => {
    assert.deepEqual(result.length, 2);
  });

  it("returns 'Lighthouse' as first string of tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    assert.deepEqual(result[0], "Lighthouse"); 
  });

  it("rreturns 'Labs' as second string of tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    assert.deepEqual(result[1], "Labs"); 
  });

});