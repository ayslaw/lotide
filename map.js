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



const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
      results.push(callback(item));
}
return results;
}

console.log(map);

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), true); //should PASS if function works!