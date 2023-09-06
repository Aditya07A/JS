// console.log('hello');

const mySym = Symbol ("myKey1")

const user1 = {
    name : "Aditya",
    "full Location" : "Hyderabad India",
    age : 18,
    email : "aditya@gmail.com",
    location : "Hyderabad",
    isLoggedin : false,
    lastLoggedIn : ["Monday","Wednesday"],
    0 : "check",
    [mySym] : "myKey1"
    //mySym : "myKey1" will give output same but type of will be string
}
// console.log(user1.email);
// console.log(user1["email"]);
// console.log(user1["full Location"]);
// console.log(user1[0]);
// console.log(user1[mySym]);
// console.log(typeof user1[mySym]);
user1.email = "aditya@google.com";
// Object.freeze(user1);//no changes can be done after this
// console.log(user1);
 user1. greeting = function(){
    console.log("Hello user1");
 }
//  console.log(user1.greeting);[Function (anonymous)] reference of function
 console.log(user1.greeting());// Hello user1

 user1.greeting1 = function (){
    console.log(`Hello,${this.name}`);
 }
 console.log(user1.greeting1());