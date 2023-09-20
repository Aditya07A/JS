// console.log('hello');
 //const tinderUser = {} //output:-{} empty object but it is non singleton object
 const tinderUser = new Object()
 tinderUser.id = "123abc"
 tinderUser.name = "sam"
 tinderUser.isLoggedIn = false
 // console.log(tinderUser);// will get {} empty object
 //--------------------------------------------------------
 // checking the properties
//  console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
//  console.log(Object.values(tinderUser));//[ '123abc', 'sam', false ]
//  console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ] all in array
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
// console.log(tinderUser.hasOwnProperty('isLogged'));//false



 const regularUser = {
    email : "some@gmail.com",
    fullName :{
        userFullNmae : {
            firstName : "Aditya",
            lastName : "Rao"
        }
    }
 }
 //console.log(regularUser.fullName.userFullNmae.firstName);//will Aditya

 const obj1 = {1:"a",2:"b"}
 const obj2 = {3:"c",4:"d"}
 //----------------------------------------------------------------
 //assign
 const obj3 = {obj1,obj2}
 //console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
 const obj4 = Object.assign(obj1,obj2)
// console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }// always will not be exact result
 //here obj1 is target and rest is source all will get in obj1
 //console.log(obj4 ===obj1);//true

 const obj5 = Object.assign({},obj1,obj2)
 //console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }// will get guranteed exact same object we want
 // here {} is target and others are source  all will get in empty new {}
 
  //----------------------------------------------------------------
 //spread
 const obj6 = {...obj1,...obj2}
 //console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }