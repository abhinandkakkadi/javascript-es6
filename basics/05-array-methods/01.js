"use strict";

const letters = ["a", "b", "c"];

// Get the length of latest updated array
const length = letters.push("d");
console.log(letters);

// Add "z" to the beginning of the array
// This method also return the size of the newly created array
letters.unshift("z");

// letters.pop() will remove one element from the end and return that removed element

// Give the index of that element if present
// If not present - it will return -1
console.log(letters.indexOf("k"));

// if exists - true - else - false
// It does not do type coersion while checking
// use uses strict checking
// i.e 2 and "2" are different
letters.includes("a");
