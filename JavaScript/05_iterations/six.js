// Array of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach to iterate over the array
const values = coding.forEach((item) => {
  console.log(item); // Logs each element in the array
  return item; // Note: The return value inside forEach is ignored
});
// console.log(values); // 'values' will be undefined because forEach does not return anything

// Array of numbers
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to create a new array with numbers greater than 4 (commented out)
// const newNum = myNums.filter((num) => {
//   return num > 4;
// });

// Using forEach to manually filter numbers greater than 4
const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num); // Adds numbers greater than 4 to the new array
  }
});
console.log(newNums); // Logs the filtered array

// Array of book objects with details
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 }, // Fiction book
  { title: "Book Two", genre: "Non Fiction", publish: 1992, edition: 2008 }, // Non-fiction book
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 }, // History book
  { title: "Book Four", genre: "Non Fiction", publish: 1989, edition: 2010 }, // Non-fiction book
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 }, // Science book
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 }, // Fiction book
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 }, // History book
  { title: "Book Eight", genre: "Science", publish: 1981, edition: 1989 }, // Science book
];

// Filtering books based on genre and publish year
// const userBooks = books.filter((bk)=>bk.genre === 'History') // Filters books with genre 'History'

const userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"; // Filters books published after 1995 with genre 'History'
});

console.log(userBooks); // Logs the filtered books
