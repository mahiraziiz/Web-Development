// Array of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach with a callback function
coding.forEach(function (val) {
  console.log(val); // Logs each element in the array
});

// Using forEach with an arrow function
coding.forEach((item) => {
  console.log(item); // Logs each element in the array
});

// Defining a separate function to use with forEach
function printMe(item) {
  console.log(item); // Logs the item passed to the function
}
coding.forEach(printMe); // Calls 'printMe' for each element in the array

// Using forEach with additional parameters (item, index, and array)
coding.forEach((item, index, arr) => {
  console.log(item, index, arr); // Logs the item, its index, and the entire array
});

// Array of objects representing programming languages
const myCoding = [
  { languageName: "javascript", languageFileName: "js" }, // JavaScript object
  { languageName: "Java", languageFileName: "java" }, // Java object
  { languageName: "Python", languageFileName: "py" }, // Python object
  { languageName: "C++", languageFileName: "cpp" }, // C++ object
];

// Using forEach to iterate over the array of objects
myCoding.forEach((item) => {
  console.log(item.languageName); // Logs the 'languageName' property of each object
});
