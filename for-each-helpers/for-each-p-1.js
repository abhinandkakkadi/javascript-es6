// create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create a variable to hold the sum
var sum = 0;

// Loop over the array, incrementing the sum variable
// common naming convention - colors - color, numbers - number etc
// after doing each of the execution inside the iterator function exits and next thing happens
numbers.forEach(function (number) {
  sum += number;
});

// print the sum variable
console.log(sum);
