"use strict";

const abhinand = {
  firstName: "Abhinand",
  lastName: "Kakkadi",
  Age: 23,
  Job: "Software Engineer",
  Habbits: ["Movies", "Trading", "Coding", "Sports"],
  HasDriversLicense: true,
  // This is a method, as it is attached to an object
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },

  // This points to the current object being called
  calcAge2: function () {
    console.log(this); // this prints the current object
    return 2037 - this.birthYear;
  },

  getDetails: function () {
    return `${this.firstName} is a ${this.Age} old ${this.Job}`;
  },
};

console.log();

console.log(abhinand.firstName);
// When using bracket - specify key in form of string
console.log(abhinand["Age"]);

// OBJECT METHODS
console.log(abhinand.calcAge(2000));
console.log(abhinand["calcAge"](2000));

console.log(abhinand["getDetails"]());
