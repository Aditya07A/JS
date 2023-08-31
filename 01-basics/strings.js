const name = "adi";
const repoCount = 50;

//console.log(`My name is ${name} and my Git-repo count is ${repoCount}`);

const gameName1 = new String("qwerty");
//console.log(gameName[0]);
//console.log(gameName.__proto__.);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf("w"));
// console.log(gameName.charAt(3));
const gameName = new String("qwerty-uiop");
console.log(gameName.length);
const newString = gameName.substring(0,4);
console.log(newString);
//index number 0-3 will be output ,4 is not include,& if given -ve value it will take as 0.
const newString2 = gameName.slice(0,5)
console.log(newString2);
//here it will print qwert
const newString3 = gameName.slice(-11,4)
console.log(newString3);
//output= qwe & it take in reverse order from the length of it.
const gameName2 = new String("hitesh-hc");
const newString4 = gameName2.slice(-8,4)
console.log(newString4);