//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 4564981546846543516551312n
console.log(bigNumber)
// console.log(anotherId)
//Reference Type(Non Primitive)

//Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', "doga"]
let myobj = {
    name: "Mahir Aziz",
    age: 22,
}
console.log(heros)
console.log(myobj)

const myfunction = function() {
    console.log("Hello World");
}

console.log(typeof myfunction)
console.log(typeof heros)
console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myfunction)

// Note-> "null datatype is object"

// https://262.ecma-international.org/5.1/#sec-11.4.3