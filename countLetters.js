const eqArrays = require("./eqArrays");

const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
    } else if (actual !== expected) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
    }
};

const countLetter = function(sentence){
    const countNum = [];
    for (const letter of sentence) {
        if (countNum[letter]) {
            countNum[letter] += 1;
        } else {
            countNum[letter] = 1
        }
    }
    return countNum;
}

const result = countLetter("lighthouse in the house")

assertEqual(result["l"], 1);
assertEqual(result["h"], 4);
assertEqual(result["e"], 3);
