const user = {
  username: "Hitesh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`username: ${this.username}`);
    // console.log(`username: ${username}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
const userOne = new User("Mahir", 12, true);
const userTwo = new User("Chai or Code", 11, false);
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);
// console.log(User());
