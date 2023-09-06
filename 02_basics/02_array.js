const marvel = ["thor","ironman","spiderman"];
const dcComic = ["batman","superman","flash"];
//marvel.push(dcComic);
//push will give [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]
const all = marvel.concat(dcComic);// concat will give array
//[ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]
//console.log(all);

const allHeroes = [...marvel,...dcComic];
//console.log(allHeroes);

const newArr = [1,2,3,[4,5,6,[7,8,[9]]]]
const combArr = newArr.flat(Infinity)//[1,2,3,4,5,6,7,8,9]
//console.log(combArr);
// console.log(newArr.flat(1));//[1,2,3,4,5,6,[7,8,[9]]]
// console.log(newArr.flat(2));//[1,2,3,4,5,6,7,8,[9]]
// console.log(newArr.flat(3));//[1,2,3,4,5,6,7,8,9]

console.log(Array.isArray("ADITYA"));// false
console.log(Array.from("ADITYA"));//converts into array [ 'A', 'D', 'I', 'T', 'Y', 'A' ]
console.log(Array.from({name :"ADITYA"}));// returns empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]
