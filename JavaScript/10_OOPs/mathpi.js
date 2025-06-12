const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);
// console.log(Math.PI);
// console.log(Math.ceil(Math.PI));

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function() {
    console.log("chai nhi bni")
  }
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
//   writable: true,
  enumerable: false,
});

for (let [key, value] of Object.entries(chai)) {
  console.log(`${key}, ${value}`);
}
