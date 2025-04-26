// console.log("M");
// console.log("A");
// console.log("H");
// console.log("I");
// console.log("R");

// function sayMyName() {
//   console.log("M");
//   console.log("A");
//   console.log("H");
//   console.log("I");
//   console.log("R");
// }

// sayMyName()
//parameter
function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
function addTwoNumber(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  //   console.log(result);
  return number1 + number2;
}

//argument
const result = addTwoNumber(3, 5);
// console.log("Result: ", result);

function loginUserMessage(username) {
  //   if (username === undefined) {
  //     console.log("Please Enter a username");
  //     return;
  //   }
  if (!username) {
    console.log("Please Enter a username");
    return;
  }
  return `${username} just logged in`;
}
// const username = loginUserMessage("Mahir")
const username = loginUserMessage();
console.log(username);
