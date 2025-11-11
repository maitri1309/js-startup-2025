// primitive datatypes
/* 7 types: String,number,boolean,null,undefined,symbol,bigint*/

//Examples:
const scroe=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
const bigNumber=25858455521515554n
console.log(typeof bigNumber);

// non primitive / reference type
/* types:Array,object,functions */

//Examples:
const fruits=["apple","mango","banana"];
let fruObj={
    name:"apple",
    coloe:"red",
};
const myFunction=function(){
    console.log("hello world");
}
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof myFunction);
console.log(typeof fruits);
console.log(typeof anotherId);