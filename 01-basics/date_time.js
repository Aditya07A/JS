// console.log('hello');
const date = new Date();
// console.log(typeof date);//object
// console.log(date);//2023-09-05T12:37:09.456Z
// console.log(date.toString());//coordinated universal time &time GMT-Tue Sep 05 2023 12:37:09 GMT+0000 
// console.log(date.toDateString());// month day year-Tue Sep 05 2023
// console.log(date.toISOString());//yyy-month-date time-2023-09-05T12:37:09.456Z
// console.log(date.toLocaleDateString());//mm/day/yyyy-9/5/2023
// console.log(date.toJSON());//mm/day/yyyy-2023-09-05T12:37:09.456Z

// const myDate = new Date(2023, 0 ,1);
// console.log(myDate.toDateString());//Sun Jan 01 2023
// //months starts from 0 if in single digit but in MM format it takes 01 as january.
// const myDate1 = new Date(2023, 0 ,1,5,3);
// console.log(myDate1.toLocaleString());//1/1/2023, 5:03:00 AM
const myDate1 = new Date("2023-01-01");
console.log(myDate1.toLocaleString())//1/1/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// // `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })

