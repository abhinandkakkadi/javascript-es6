// create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create a variable to hold the sum
var sum = 0;

// this is an alternative way to call that function
function adder(number) {
  sum += number;
}

// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// print the sum variable
console.log(sum);
