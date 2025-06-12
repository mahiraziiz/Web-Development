// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.address = "Khudanpuri";
// console.log(tinderUser);

const regularUser = {
  email: "sam@gmail.com",
  fullname: {
    userfullname: {
      firstName: "Mahir",
      lastName: "Aziz",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj4 = {
  5: "c",
  6: "d",
};
// const obj3 = {
//   obj1,
//   obj2,
// };

// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log(obj3);

const user = [
  {
    id: 1,
    email: "mahiraziz@gmail.com",
  },
  {
    id: 1,
    email: "mahiraziz@gmail.com",
  },
  {
    id: 1,
    email: "mahiraziz@gmail.com",
  },
];
user[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty("name"));

const course = {
  course: "JS In Hindi",
  price: 1000,
  courseInstructor: "Hitesh",
};

// course.courseInstructor
// const { courseInstructor } = course;
const { courseInstructor: instructor } = course;
// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({ company }) => {};

// navbar((company = "Delux"));

// {
//   "name": "Mahir",
//   "courseName": "JS In Hindi",
//   "price": "Free"
// }

[{}, {}, {}];
