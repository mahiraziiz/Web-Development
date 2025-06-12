// Declaring variables with different scopes
let a = 10; // 'let' has block scope
// const b = 20; // 'const' also has block scope (commented out)
// var c = 30; // 'var' has function or global scope
var c = 300; // Re-declaring 'c' using 'var' (allowed with 'var')

// Block scope example
if (true) {
  a = 10; // Reassigning 'a' (allowed since 'a' is declared with 'let')
  const b = 20; // 'b' is block-scoped and only accessible inside this block
  var c = 30; // 'c' is re-declared and updated (affects global scope due to 'var')
  console.log("Inner value of a is: ", a); // Logs the inner value of 'a'
  // console.log(c)
}

// Accessing variables outside the block
console.log("Outer value of a is: ", a); // Logs the outer value of 'a' (updated inside the block)
// console.log(b); // Uncommenting this will throw an error because 'b' is block-scoped
console.log(c); // Logs the value of 'c' (updated globally due to 'var')

function one() {
  const username = "Mahir Aziz";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
one();

if (true) {
  const username = "mahir"
  if(username === "mahir") {
    const website = "youtube"
    console.log(username + " " + website);
  }
  // console.log(website);
}
// console.log(username);

// +++++++++++++++ interesting +++++++++++++++

// addone(5) 
// function addone(num) {
//   return num + 1;
// }
function addone(num) {
  return num + 1;
}
addone(5) 


// addTwo(5);
// const addTwo = function(num) {
//   return num + 2;
// }

const addTwo = function(num) {
  return num + 2;
}
addTwo(5);

