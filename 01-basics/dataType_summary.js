/*
# Javascript is dynamically typed, as varibale type are detremined & checked at runtime
   let x = 5; // x is a number  
   x = "Hello"; // x is now a string
   x = [1, 2, 3]; // x is now an array
   const temp = null{null means not 0 but completely empty}

# datatypes :- based the storage 2 types primitive & non-primitive(refrence type)

# Primitive :- 7types - string,numbers,boolean,null,undefined,symbol,bigInt

# Non-primitive:- arrays,objects,functions

const id1 = Symbol("123");
const id2 = Symbol("123");
console.log(id1 ==== id2);//will get false

# check datatype :-  console.log(typeof (x))// will get number
type of null = object 
type of bigInt = undefined
---------------------------------------------------------------------
stack memory used in primitive 
heap used in non-primitive
 
*/
let name1 = "abcd";
let name2 = name1;
name2 = "efgh";
// console.log(name1);
// console.log(name2);
// here we get copy of the name1 from the stack but the otiginal value is same not changed

let user1={
    email : "abcd@gmail.com",
    upi :"use@ybl"
}
let user2 = user1;
user2.email = "qwerty@gmail.com";
console.log(user1.email);
console.log(user2.email);
// here we get the reference of the value & if value changed both the value get effected.