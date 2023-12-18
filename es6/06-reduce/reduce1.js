var numbers = [10, 20, 30];
var sum = 0;

// here reduce also give out a single result
// the second argument - 0, is initial value which will be assigned to sum
var result = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

console.log(result);
