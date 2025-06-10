// let myName = "Mahir Aziz     "

// console.log(myName.length);
// console.log(myName.truelength);

const myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "Hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Mahir = function () {
  console.log(`Mahir is present in all objects`);
};

heroPower.Mahir();

Array.prototype.heyMahir = function () {
  console.log(`Mahir says hello`);
};

myHero.heyMahir();
// heroPower.heyMahir();

//inheritance

const User = {
  name: "chai",
  eMail: "example@google.com",
};

const teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

teacher.__proto__ = User;

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, teacher);

let anotherUsername = "chaiORcode     ";

String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.truelength();
"Mahir".truelength();
"iceTea".truelength();
