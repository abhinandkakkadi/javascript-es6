// This is a constructor of type Car which initialize an object of type car
// this type have one instance variable called model
function Car(model) {
  this.model = model;
}

// we are creating an array of object of type Car
var cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")];

// AIM - find a car of model - "Focus" (iterate through each object of type Car and then select the first car in the array which match the specified criteria)
var car = cars.find(function (car) {
  return car.model === "Focus";
});
console.log(car);
