let a = 10;
// const b = 20;
// var c = 30;
var c = 300;
if (true) {
  a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner value of a is: ", a);
}

console.log("Outer value of a is: ", a);
// console.log(b);
console.log(c);
