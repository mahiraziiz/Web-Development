const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heros.push(dc_heroes);

//++++++++ PUSH OPERATOR +++++++
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//+++++++++CONCATE OPERATOR++++++
// const allHeroes = marvel_heros.concat(dc_heroes);
// console.log(allHeroes)

//++++++++++++++ SPREAD OPERATOR  ++++++++++++
// const all_New_Heroes = [...marvel_heros, ...dc_heroes]
// console.log(all_New_Heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [ 4 , 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(another_array);

console.log(Array.isArray("Mahir"))
console.log(Array.from("Mahir"))
console.log(Array.from({name: "mahir"})) // interesting case for interview
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4));