// IMMEDIATELY INVOKE FUNCTION EXPRESSION (IIFE)

//+++++++++Normal Function ++++++++
// function chai() {
//     console.log(`DB Connected`)
// }

// chai();

//+++++++++++ IIFE Function ++++++++++
(function chai() {
  console.log(`DB Connected`);
})();

(() => {
  console.log(`DB Connected Two`);
})();

(function aurcode() {
  //named iife
  console.log(`DB Connected Three`);
})();

((name) => {
  console.log(`DB Connected Three ${name}`);
})("Mahir");
