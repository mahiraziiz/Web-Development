const { prototype } = require("postcss/lib/previous-map");

function multiple5(num) {
  return num * 5;
}

multiple5.power = 2;
console.log(multiple5(5));
console.log(multiple5.power);
console.log(multiple5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};
// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250);
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);
chai.printMe();

// Here's what happens behind the scene whent he new keyword is used:

// A new object is created: The new keyword initiates the creation of a new Javascript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor fucntion is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to the intended return value.

// The new objec is returned: After the constructor fucntion has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
