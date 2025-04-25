// Singleton pattern (not implemented here, just mentioned)

// Object literals
// `Object.create` is another way to create objects in JavaScript

// Creating a unique symbol to use as a key in the object
const mySym = Symbol("key1");

// Object containing key-value pairs
const JsUser = {
  name: "Mahir", // Regular key-value pair
  "Full Name": "Mahir Aziz", // Key with spaces, accessed using bracket notation
  [mySym]: "mykey1", // Symbol as a key, accessed using bracket notation
  age: 18, // Number value
  location: "Jaipur", // String value
  email: "mahir@google.com", // String value
  isLoggedIn: false, // Boolean value
  lastLoginDays: ["Monday", "Saturday"], // Array value
};

// Accessing object properties
console.log(JsUser.name); // Accessing 'name' using dot notation
console.log(JsUser["Full Name"]); // Accessing 'Full Name' using bracket notation
console.log(JsUser[mySym]); // Accessing symbol key using bracket notation
console.log(typeof JsUser.mySym); // Checking type of a non-existent property (undefined)
console.log(JsUser.email); // Accessing 'email' using dot notation
console.log(JsUser["email"]); // Accessing 'email' using bracket notation
console.log(JsUser.location); // Accessing 'location' using dot notation
console.log(JsUser.lastLoginDays); // Accessing 'lastLoginDays' array

// Updating object properties
JsUser.email = "mahir@chatgpt.com"; // Updating 'email' property
console.log(JsUser.email); // Logging updated email

// Uncommenting Object.freeze will make the object immutable
// Object.freeze(JsUser);

JsUser.email = "mahir@microsoft.com"; // Attempting to update 'email' again
console.log(JsUser); // Logging the entire object to see changes

// Adding methods to the object
JsUser.greeting = function() {
    console.log("Hello JS User"); // Simple greeting method
};
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`); // Greeting method using `this` to access object properties
};

// Calling the methods
console.log(JsUser.greeting()); // Calling 'greeting' method
console.log(JsUser.greetingTwo()); // Calling 'greetingTwo' method with dynamic content