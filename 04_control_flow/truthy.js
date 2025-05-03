const userEmail1 = "h@hitesh.ai";
const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have ever email");
}

// falsy values
// false, 0, -0, BinInt 0n, "", null, undefined, NaN

//truthy values
//true, 1, "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10 ?? 20;

var1 = undefined ?? 15;
console.log(var1);

console.log(val1);

// terniary operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 12 ? console.log("less than 80") : console.log("More than 80");
