//for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
}

const greetings = "hellow world!"
for (const greets of greetings) {
    //console.log(greets);
}

//Maps

const map = new Map()
map.set('IN',"india")
map.set('AU',"australia")
map.set('FR',"france")
map.set('IN',"india")
//console.log(map);
//unique entries

for (const [key,value] of map) {
    //console.log(key ,' : ',value);
}

const myObj={
    'apple':'red',
    'mango':'orange'
}

// for (const [key,value] of myObj) {
//     console.log(key ,' : ',value);
// }