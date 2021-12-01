const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays (arr1, arr2)) {
        console.log('pass');
    } else {
        console.log('fail');
    }
};

  module.exports = assertArraysEqual; 