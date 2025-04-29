// Object with properties and a method
const user = {
  username: "Mahir Aziz", // User's name
  price: 123, // User's price

  // Method to display a welcome message
  welcomeMessage: function () {
    console.log(`${this.username},  welcome to website`); // Logs a personalized welcome message
    console.log(this); // Logs the current object context ('user')
  },
};

// Example of calling the method
// user.welcomeMessage()
// user.username = "sam" // Changing the username
// user.welcomeMessage() 

console.log(this); // Logs the global context (in browsers, it would be the 'window' object)

// Example of a regular function
// function chai() {
//     let username = "Mahir"
//     console.log(this.username); // 'this' refers to the global object in regular functions
// }
// chai()

// Example of a function expression
// const chai = function() {
//     let username = "Mahir"
//     console.log(this.username); // 'this' still refers to the global object
// }
// chai()

// Example of an arrow function
const chai = () => {
  let username = "Mahir"; // Local variable
  console.log(this.username); // 'this' in arrow functions refers to the parent scope (not the global object)
  console.log(this); // Logs the parent scope context
};
chai();

// Arrow function to add two numbers (explicit return)
// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }; // arrow function

// Arrow function to add two numbers (implicit return)
const addtwo = (num1, num2) => ({ username: "Mahir" }); // Returns an object with a 'username' property
// Arrow function

console.log(addtwo(3, 5)); // Logs the returned object from the arrow function