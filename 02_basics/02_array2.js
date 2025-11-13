const clr = ["black", "red", "blue"];
const fruits = ["mango", "apple", "banana"];
//clr.push(fruits);
// console.log(clr);
// console.log(clr[3][1]);
const allColors = clr.concat(fruits);
console.log(allColors);

const allNewColors = [...clr, ...fruits];
console.log(allNewColors);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realArr = anotherArr.flat(Infinity);
console.log(realArr);

console.log(Array.isArray("Maitri"))
console.log(Array.from("Maitri"))
console.log(Array.from({ name: "Maitri" }))//interesting

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));;

