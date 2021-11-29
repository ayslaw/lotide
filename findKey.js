const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};


const findKey = function(Obj1, callback) {
  let result = [];
  for (const item in Obj1) {
    if (callback(Obj1[item])) {
      result.push(item);
      console.log(result);
      return String(result[0]);
    }
  }
  return result[0];
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"