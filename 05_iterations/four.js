const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myobj) {
    // console.log(myobj[key]);
    //console.log(`${key} for ${myobj[key]}`);
}

const programming=['js','ruby','cpp','py','java']
for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN',"india")
// map.set('AU',"australia")
// map.set('FR',"france")
// map.set('IN',"india")
// for (const key in map) {
//     console.log(key);
// } (map is not iteratable)