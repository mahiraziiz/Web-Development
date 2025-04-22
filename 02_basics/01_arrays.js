// array

const myArr = [2, 3, 5, 6, 6, 1];

const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array()
console.log(myArr[3]);


// Array methods

myArr.push(6)
myArr.push(7)
myArr.push(76)
myArr.pop()
myArr.unshift(7)
myArr.shift()
console.log(myArr.includes(8))
console.log(myArr.indexOf(3))

const newArr = myArr.join()

console.log(myArr)
console.log(typeof newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);