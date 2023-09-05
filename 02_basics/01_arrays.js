// arr declaration
const arr = [0,1,2,3,4];
const arr1 = ["shaktiman","naagraj"];
const arr2 = new Array(6,7,8,9)
// console.log(arr);
// console.log(arr[1]);
// console.log(arr1);
// console.log(arr2);

//array methods:
const myArr = [0,1,2,3,4];
// myArr.push(5,6,7);// add element at end
// console.log(myArr);
// myArr.pop()//remove element from last
// console.log(myArr);
// myArr.unshift(9);//add element at starting but it changes the index of all element
// console.log(myArr);
// myArr.shift();//remove element at starting 
// console.log(myArr);
//console.log(myArr.includes(9));//false
 //console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(20));//will give -1 as it is not there

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice ,,,splice
console.log("A:-",myArr);
const myN1 = myArr.slice(1,3); // includes index number ( 1 & 2) but not (3)
console.log(myN1);//[ 1, 2 ]  original array is not-changed
console.log("B:-",myArr);
const myN2 = myArr.splice(1,3); // includes all index number (1,2,3)  original array is changed
console.log(myN2);//[ 1, 2, 3 ]  original array is changed
console.log("C:-",myArr);
