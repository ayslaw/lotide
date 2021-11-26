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


const letterPosition = function(sentence){
  const countNum = {};
  for (i = 0; i < sentence.length; i++) {
      let letter = sentence[i];
      if (countNum[letter]) {
          countNum[letter].push(i);
      } else {
          countNum[letter] = [i];
      }
  }
  
  
  console.log(countNum)
  return countNum;
}

console.log(letterPosition("lighthouse in the house"))



// TEST CODE
assertArraysEqual(letterPosition("hello").e, [1]);