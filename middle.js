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



let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays (arr1, arr2)) {
      console.log('pass');
  } else {
      console.log('fail');
  }
};

  const middle = function (array) {
  let result = [];
  if (array.length % 2 === 0) {
      result = [array[array.length / 2 - 1], array[array.length / 2]]
      return result
  } else {
      result =  [array[Math.round(array.length / 2 - 1)]];
      return result
  }
};

module.exports = middle;

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // PASS
assertArraysEqual(middle([1, 2, 3]), ["2"]); // FAIL
assertArraysEqual(middle([1, 2, 3, 4]), [3, 2]); // FAIL