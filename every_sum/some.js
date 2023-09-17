// in case of some helper - only if some of the elements in the array result in a true statement
// the final result is true
// It is a logical or of every single

var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];

var result = computers.some(function (comp) {
  return comp.ram > 16;
});

console.log(result);
