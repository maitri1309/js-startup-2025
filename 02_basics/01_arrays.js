//Arrays

const myArr = [0, 1, 2, 3, 4]
//console.log(myArr[3]);

const fruits = ["Apple", "Mango", "Banana"]
//console.log(fruits[1]);

const myArr2 = new Array(1, 2, 3, 4, 5)
//console.log(myArr2[4]);

//Array Method
/*
myArr.push(5)
myArr.pop();*/
// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(12));

// const newArr=myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

//slice ,splice
myArr.push(5);
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);







