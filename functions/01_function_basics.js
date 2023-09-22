// console.log('hello');

function sayMyName() {
    console.log("A");
    console.log("d");
    console.log("i");
    console.log("t");
    console.log("y");
    console.log("a");
}
// sayMyName();

// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addNumbers(3,4);//7
// addNumbers(3,"4");//34
// addNumbers(3,"a");//3a

function addNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2
    // console.log("aditya"); it will not print as it after the return
}
const result = addNumbers(3, 7)
// console.log("Result: ",result);

// function loginUserMessage(userName){
//     return `${userName} just logged in`
// }
// console.log(loginUserMessage("Aditya"));
// console.log(loginUserMessage()); //undefined just logged in

// function loginUserMessage(userName){
//     if(!undefined){   //    if(userNmae === undefined) both are same 
//         console.log("please enter user name");
//         return
//     }
//     return `${userName} just logged in`
// }
// console.log(loginUserMessage("Aditya"));

//-----------------------------
//default value 

function loginUserMessage(userName = "sam") {
    if (!undefined) {
        console.log("please enter user name");
        return
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage());