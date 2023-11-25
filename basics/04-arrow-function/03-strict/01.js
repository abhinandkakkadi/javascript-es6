"use strict";

// function expression

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// it's called arrow function
// left side of arrow defined the parameters and since right side only have a single line
// We can just return right it there (the return is implicitly defined there)
const calcAge2 = (birthYear) => 2037 - birthYear;
console.log(calcAge2(2000));

// Here since there are 2 line of code
// We have to explicitly define return statement
const function2 = (param1) => {
  const a = param1;
  return a;
};

const function3 = (param1, param2) => {
  const a = param1 + param2;
  return a;
};

// string formatting
const myName = "abhinand";
const age = 23;
const d = `${myName} is the name, age is ${age}`;
