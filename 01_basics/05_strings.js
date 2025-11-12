const name = "maitri";
const repoCount = 50

console.log(name + " " + repoCount + " " + "values");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("maitri-dakoria-md")

console.log(gameName[5]);
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(3,5);
console.log(anotherString);

const newStrinOne="     maitri    "
console.log(newStrinOne);
console.log(newStrinOne.trim());
console.log(newStrinOne.trimStart());
console.log(newStrinOne.trimEnd());
const url="https://maitri.com/dakoria%20dakoriyaa"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('maitres'));//checkes if that keyword includes or not

console.log(gameName.split('-'));
