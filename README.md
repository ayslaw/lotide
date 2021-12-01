# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ayslaw/lotide`

**Require it:**

`const _ = require('@ayslaw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: checks whether an array is equal to the expected output
* `assertEqual`: checks whether a string is equal to the expected output
* `assertObjectsEqual`: checks whether an object is equal to the expected output
* `countLetters`: counts the frequency of a letter's occurrence in a string
*`countOnly`: filters an array's contents based on an object, then returns frequency of each value's occurrence in the array
*`eqArrays`: checks if two arrays are the same
*`eqObjects`: checks if two objects are the same
*`findkey`: checks values in a nested object, then returns the parent key
*`findkeyByValue`: searches through an object for a value, then returns a key
*`head`: returns the first value in an array
*`letterPositions`: returns the index of a letter within a sentence
*`map`: iterates through an array and returns attributes of the array based on varying inputs in the callback function
*`middle`: returns the middle value in an array
*`tail`: returns all values in an array except for the head
*`takeUntil`: iterates through an array and prints values, until a given value occurs
*`without`: compares two arrays, and returns the unique values that are in array A but not in array B
