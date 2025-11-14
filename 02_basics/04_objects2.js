//const tinderUser=new Object()
const tinderUser={}

tinderUser.id="101abc"
tinderUser.name="Maitri"
tinderUser.isLoggedIn=false

const regUser={
    email:"maitri@gmail,com",
    fullname:{
        userfullname:{
            firstname:"maitri",
            lastnamer:"dakoria"
        }
    }
}
// console.log(regUser.fullname);
// console.log(regUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
 
const obj4={...obj1,...obj2,...obj3}
//console.log(obj4);

//const obj4={obj1,obj2,obj3}
//const obj4=Object.assign({},obj1,obj2,obj3)

//console.log(tinderUser);

const users =[
    {
        id:1,
        email:"m@gmail.com"
    },
    {
        id:2,
        email:"a@gmail.com"
    },
    {
        id:3,
        email:"i@gmail.com"
    },
    {
        id:4,
        email:"t@gmail.com"
    },
]
users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLogged'));

const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"maitri"
}
//course.courseInstructor
const {courseInstructor: instructor}=course
//console.log(courseInstructor);
console.log(instructor);
/*
const navbar=()=>{
}
navbar(company="maitri")*/

//API
/*
{
    "name":"maitri",
    "coursename":"js in hindi",
    "price":999
}

[
{},
{},
{}
]

*/

//JSON formatter for data  tool{rendom user me}