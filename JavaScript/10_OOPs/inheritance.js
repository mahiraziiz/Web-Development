// User class definition
class User {
  constructor(username) {
    this.username = username; // Assign username property
  }

  logMe() {
    console.log(`Username is ${this.username}`); // Method to log the username
  }
}

// Teacher class extends User (inheritance)
class Teacher extends User {
  constructor(username, email, password) {
    super(username); // Call the parent class constructor
    this.email = email; // Assign email property
    this.password = password; // Assign password property
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`); // Method specific to Teacher
  }
}

// Creating an instance of Teacher
const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.addCourse(); // Calls Teacher's method
chai.logMe(); // Calls inherited method from User

// Creating an instance of User
const masalaChai = new User("masalaChai");

masalaChai.logMe(); // Calls User's method

// Comparing objects and checking inheritance
console.log(chai === masalaChai); // false, different instances
console.log(chai === Teacher); // false, chai is an instance, not the class itself
console.log(chai instanceof Teacher); // true, chai is an instance of Teacher
console.log(chai instanceof User); // true, chai is also an instance of User due to inheritance
