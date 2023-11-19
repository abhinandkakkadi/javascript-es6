var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];

// for every helper it take each element of array inside the iterator function
// and based on that condition it return true or false - after than we do logical and operation of
// every one of those result.
// So in an essence only if all the of them are true it will return true

// check that if every computer in the array have a ram over 16gb
// usecase - check of all elements in the array have that kind of capability
var result = computers.every(function (pc) {
  return pc.ram > 16;
});

console.log(result);
