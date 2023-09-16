var cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "Camaro", price: "expensive" },
];

// in this case also we are taking in a array
// and doing similar action on some data and sending back same kind of data for
// each input
var prices = cars.map(function (car) {
  return car.price;
});
// this is also called because we are plucking a property
// of each of object of the array

console.log(prices);
