// 5 falsy values: 0, '', undefined, null, NaN
// all the above values will be converted to a bool false when we
// try to convert them to boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN)); // Not a number
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean("Abhinand"));

// here value of height is undefined which is coerced into boolean false.
let height;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is not defined");
}
