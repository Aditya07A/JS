let score = 77;
let score1 = "77";
let score2 = "77abc";
let score3 = undefined;
let score4 = null;
let score5 = true;
let score6 = false;

//console.log(typeof score);
//console.log(typeof (score1));
let valueInNumber = Number(score1);
// console.log(valueInNumber);
// console.table(typeof[score,score1,score2,score3,score4,score5,score6]);//will give object as output
let valueInNumber1 = Number(score2);
//console.log(typeof (valueInNumber1));
//console.log((valueInNumber1));
let valueInNumber3 = Number(score2);
//console.log(typeof (valueInNumber3));
//console.log((valueInNumber3));
//console.log(typeof (score3));
let valueInNumber4 = Number(score4);
//console.log((valueInNumber4));
//console.log(typeof (score4));
//console.log(typeof (score5));
//console.log(typeof (score6));

/* converts to
"33" => 33
"33abc" => NaN,but type will be number
true => 1
false => 0
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
//console.log(booleanIsLoggedIn1);

let isLoggedIn2 = "adi";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
//console.log(booleanIsLoggedIn2);

/*
converts to:
1=> true
0=> false
"" => false
"adi" => true
*/

let num = 33;
let stringToNumber = String(num);
console.log(typeof(stringToNumber));