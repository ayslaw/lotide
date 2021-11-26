const eqArrays = function(arr1, arr2) {

 
  if (arr1.length !== arr2.length) {
      return false;
  }

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  return true;

};


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== (Object.keys(object2).length)) {
    return false;
  } else if (Object.keys(object1).length === (Object.keys(object2).length)) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
          return (eqObjects(object1[key], object2[key]));
        }
      }
    }
    return true;
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba);