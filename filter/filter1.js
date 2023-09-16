var products = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" },
];

// here filteredProducts will have the output where each element aligns with the type that you have specified
// for map and filter we have to do a return or else undefined will be gone
// if the body returns true that element of the input array will be part of the output array
var filteredProducts = products.filter(function (product) {
  return product.type === "fruit";
});

console.log(filteredProducts);
