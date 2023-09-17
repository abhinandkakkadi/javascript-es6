// So Field is actually a type because it have a this method and value is an
// instance variable of type Field

// note - function name is the type name - most probably Capitalized
//        It will have a this to represent the current object
function Field(value) {
  this.value = value;
}

// validate is a method of type Field
Field.prototype.validate = function () {
  return this.value.length > 0;
};

// username and password are two object which initialize two objects
// and these objects can call the method which is defined on this type
var username = new Field("2");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

console.log(username.validate());

// so in the above case if we want to check if all the fields are non empty
// we can use a every helper function in that case
// usecase - login or signup form validation
var fields = [username, password, birthdate];
var validateResult = fields.every(function (field) {
  return field.validate();
});

console.log("validation result: " + validateResult);
