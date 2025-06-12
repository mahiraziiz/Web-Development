// Example of simple console logs
// console.log("M");
// console.log("A");
// console.log("H");
// console.log("I");
// console.log("R");

// Function to print a name letter by letter
// function sayMyName() {
//   console.log("M");
//   console.log("A");
//   console.log("H");
//   console.log("I");
//   console.log("R");
// }

// sayMyName()

// Function to add two numbers and log the result
function addTwoNumber(number1, number2) {
  console.log(number1 + number2); // Logs the sum of two numbers
}

// Function to add two numbers and return the result
function addTwoNumber(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  //   console.log(result);
  return number1 + number2; // Returns the sum of two numbers
}

// Example of calling the addTwoNumber function
const result = addTwoNumber(3, 5);
// console.log("Result: ", result);

// Function to log a user message based on the username
function loginUserMessage(username) {
  // Check if username is not provided
  if (!username) {
    console.log("Please Enter a username"); // Logs a message if username is missing
    return;
  }
  return `${username} just logged in`; // Returns a login message
}

// Example of calling loginUserMessage
// const username = loginUserMessage("Mahir")
const username = loginUserMessage(); // Calling without username
console.log(username); // Logs the result of loginUserMessage

// Function to calculate cart price using rest parameters
function calculateCartPrice(...num1) {
  return num1; // Returns all the numbers passed as an array
}
console.log(calculateCartPrice(200, 400, 3300, 1522)); // Example usage

// Function to calculate cart price with two fixed parameters and rest parameters
function calculateCartPrice(val1, val2, ...num1) {
  return num1; // Returns the rest of the numbers as an array
}
console.log(calculateCartPrice(2400, 500, 300, 122)); // Example usage

// Object representing a user
const user = {
  username: "Mahir Aziz", // User's name
  price: 199, // User's price
};

// Function to handle an object and log its properties
function handleObject(anyobject) {
  console.log(
    `user name is ${anyobject.username} and price is ${anyobject.price}` // Logs the username and price of the object
  );
}

// Example of calling handleObject with an object
handleObject({
  username: "same", // Example username
  price: 123, // Example price
});

// Array of numbers
const myNewArray = [122, 3343, 2, 23, 533];

// Function to return the first value of an array
function returnSecondValue(getArray) {
  return getArray[0]; // Returns the first element of the array
}

// Example of calling returnSecondValue
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([122, 3343, 2, 23, 533])); // Logs the first value of the array

