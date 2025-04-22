const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "Value");
//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('MahirAZ')
// console.log(gameName[0]);
//__proto__
// console.log(gameName.__proto__);
//length
// console.log(gameName.length)
//toUpperCase
// console.log(gameName.toUpperCase())
//charAt
console.log(gameName.charAt(5))
//indexOf
console.log(gameName.indexOf('a'))

//substring
const newString = gameName.substring(0, 4)
console.log(newString);
//slice
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   Mahir Aziz   ";
console.log(newStringOne)
//trim
console.log(newStringOne.trim());
const url = "https://hitesh.com/hitesh%20chaudhary";
//Replace
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'))