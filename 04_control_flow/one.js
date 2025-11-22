// IF

const isUserLoggedIn = true
const temprature = 41
// if(2!=3){
//     console.log("executed");

// }
if (temprature === 41) {
    console.log("temprature is less than 50");
} else {
    console.log("temprature is greater than 50");
}
console.log("executed");

// let score=200
// if(score>200){
//     let power="fly"
//     console.log(`User Power: ${power}`);

// }
// console.log(`user power: ${power}`);

// const balance=1000
// if(balance>500) console.log("test"),console.log("test2"); (implicit scope)
// if (balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance <900){
//     console.log("less than 900");
// }else{
//     console.log("LESS THAN 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}else{
    console.log("not allowed");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("allowed");
    
}
//<,>,<=,>=,==,!=,===,!==