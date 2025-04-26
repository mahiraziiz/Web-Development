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

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 3300, 1522));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(2400, 500, 300, 122));

const user = {
  username: "Mahir Aziz",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `user name is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject({
  username: "same",
  price: 123,
});


const myNewArray = [122, 3343,2, 23, 533];

function returnSecondValue(getArray) {
  return getArray[0];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([122, 3343,2, 23, 533]));

