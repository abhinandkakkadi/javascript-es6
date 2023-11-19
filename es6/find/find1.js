var users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

// this will iterate through the whole array and return the first record which match the given condition internally
// if return statement is not provided, it will return an undefined statement
var user = users.find(function (user) {
  return user.name === "Alex";
});

console.log(user);
