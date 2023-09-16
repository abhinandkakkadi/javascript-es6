var products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 13 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 },
];

// the only products that meet all the mentioned criteria will be part of the resulting array
var filteredProducts = products.filter(function (product) {
  return (
    product.type === "vegetable" && product.quantity > 0 && product.price < 15
  );
});

console.log(filteredProducts);
