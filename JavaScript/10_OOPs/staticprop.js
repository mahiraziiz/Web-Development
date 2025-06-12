// Correct way to define a class with static properties/methods in JavaScript

const { use } = require("react");

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const Mahir = new User("Mahir");
Mahir.logMe(); // Logs: Username Mahir

// To call the static method, use the class name, not the instance
console.log(User.createId()); // Logs: 123

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new Teacher("iPhone", "i@phone.com");
iPhone.logMe();
console.log(iPhone);
