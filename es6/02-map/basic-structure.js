var numbers = [1, 2, 3];

// same as forEach, but it takes in each of the element of array inside the iterator function
// and return the result in a brand new array
// can be helpful in situation where same operation is to be done on a set of data
// and save all that set of data
var doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);
