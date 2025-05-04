// Object with programming languages and their descriptions
const myObject = {
  js: "Javascript", // JavaScript language
  cpp: "C++", // C++ language
  rb: "ruby", // Ruby language
  swift: "Swift by apple", // Swift language by Apple
};

// Iterating over the keys of the object using 'for...in'
for (const key in myObject) {
  console.log(key); // Logs the keys of the object (e.g., 'js', 'cpp', etc.)
}

// Iterating over the keys and values of the object
for (const key in myObject) {
  // console.log(myObject[key]); // Logs the values of the object
  console.log(`${key} shortcut is for ${myObject[key]}`); // Logs key-value pairs in a readable format
}

// Array of programming languages
const programming = ["js", "rb", "py", "java"]; // Array of language shortcuts

// Iterating over the array using 'for...in'
for (const key in programming) {
  console.log(`${key} :-> ${programming[key]}`); // Logs the index and value of each element
}

// Map is not iterable with 'for...in'
const map = new Map(); // Creating a new Map
map.set("IN", "India"); // Adding key-value pairs
map.set("USA", "United State of America");
map.set("Fr", "France");
map.set("IN", "India"); // Overwrites the previous 'IN' key

// Attempting to iterate over a Map using 'for...in' (this won't work as expected)
for (const key in map) {
  console.log(key); // This won't log anything because Maps are not iterable with 'for...in'
}
