function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("I");
    console.log("T");
    console.log("R");
    console.log("I");
}
//sayMyName();
/*
function addTwoNumber(number1,number2){
    console.log(number1+number2);
}*/

function addTwoNumber(number1,number2){
    //let result=number1+number2;
    //return result;
    //console.log("maitri") not gonna work after "return"
    return number1+number2;
}

const result=addTwoNumber(4,5);

console.log("result: ",result);

//addTwoNumber(4,"5");
//addTwoNumber(4,a);ERROR
//addTwoNumber(4,null);


function loginUserMessage(username="sam"){
    if(!username){
       0// if(username===undefined){
        console.log("please enter a username first..!");
        return;
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage("maitri"));
console.log(loginUserMessage("maitri"));
//console.log(loginUserMessage(""));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500))

const user={
    username:"maitri",
    price:199
}
function handleObj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObj(user)
handleObj({
    username:"shaili",
    price:800
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));
