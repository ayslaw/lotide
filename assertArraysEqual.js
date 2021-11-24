const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {

  let i = 0;
  let answer = Boolean;

  for (i = 0; i < arr1.length; i++) {

    if (arr1.length === arr2.length) {
      if (arr1[i] === arr2[i]) {
        answer = true;
      } else if (arr1[i] !== arr2[i]) {
        answer = false;
      }
    } else {
      answer = false
    }
  }
  return answer;

};

module.exports = eqArrays;

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
  10
  1