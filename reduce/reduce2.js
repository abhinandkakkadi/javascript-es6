var primary = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

// Q - from the array of object above give a result like this ["red","yellow","blue"]
// in this case the empty array will be intialized to previous
var result = primaryColors.reduce(function (accumulator, primaryColor) {
  accumulator.push(primaryColor.color);
  return accumulator;
}, []);
// all the updated array will be coming to the accumulator

console.log(result);
