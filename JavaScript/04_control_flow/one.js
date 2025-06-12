// if

// if(true) {

// }

// if(false) {

// }

// if( 2 === 2) {

// }
// const isUserLoggedIn = true;
if (isUserLoggedIn) {
}
const temparature = 23;
if (temparature < 50) {
  console.log("less than 50");
} else {
  console.log("temparuture is greator than 50");
}

console.log("temperature is greator than 50");
// if(2 == "2") {
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=,  ===

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`User power ${power}`);
}

const balance = 1000;
//avoid this type of code
// if(balance > 500) console.log("test"), console.log("test2")

if (balance < 500) {
  console.log("less than 500");
} else if (balance > 500) {
  console.log("more than 500");
} else {
  console.log("equal to 500");
}


const isUserLoggedIn = true;
const debitCard = true

const loggedInfromGoogle = false
const loggedInFromEmail = true
if(isUserLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInfromGoogle) {
    console.log("User logged In");
}
