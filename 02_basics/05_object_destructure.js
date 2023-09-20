//console.log('hello');
const course = {
    courseName : "JS in Hindi",
    coursePrice : "999",
    courseInstructor : "Aditya"
}
//object destructure
const {courseInstructor : instructor} = course;
console.log(instructor);