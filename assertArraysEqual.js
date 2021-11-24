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

let assertArraysEqual = function(arr) {
  if (arr === false) {
      console.log('pass');
  } else {
      if (arr === true) {
          console.log('fail');
      }
  }
};

module.exports = assertArraysEqual; 

assertArraysEqual((eqArrays)([1, 2, 3], [3, 2, 1])); // => false
assertArraysEqual((eqArrays)([1, 2, 3], [1, 2, 3])); // => true
assertArraysEqual((eqArrays)(["1", "2", "3"], ["1", "2", "3"])); // => true
assertArraysEqual((eqArrays)(["1", "2", "3"], ["1", "2", 3])); // => false