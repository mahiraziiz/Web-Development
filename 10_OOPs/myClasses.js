// ES6

// Example using ES6 class syntax (commented out)
/*
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`; // Example of "encrypting" the password
  }
  changeUsername() {
    return `${this.username.toUppeCase()}`; // Typo: should be toUpperCase()
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());
*/

// Behind the scenes: Constructor function and prototype methods

// Constructor function for User objects
function User(username, email, password) {
  this.username = username; // Assign username property
  this.email = email;       // Assign email property
  this.password = password; // Assign password property
}

// Creating a new User instance using the constructor functin
const tea = new User("tea", "chai@gmail.com", "123");

// Adding a method to the User prototype to "encrypt" the password
User.prototype.encryptPassword = function () {
  return `${this.password}`; // Returns the password (not actually encrypted)
};

// Adding a method to the User prototype to return the username
User.prototype.changeUsername = function () {
  return `${this.username}`; // Returns the username
};

// Calling the prototype methods on the User instance
console.log(tea.encryptPassword()); // Logs the password of 'tea'
console.log(tea.changeUsername());  // Logs the username of 'tea'
