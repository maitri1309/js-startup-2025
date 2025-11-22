const fruit = ['mango', 'apple', 'banana', 'grapes']

// fruit.forEach(function (item) {
//     console.log(item);
// });
// fruit.forEach((element) => {
//     console.log(element);
// });

// function printMe(item){
//     console.log(item);
// }
// fruit.forEach(printMe)

// fruit.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const fruitMe=[
    {
        fruitName:"apple",
        color:"red"
    },
    {
        fruitName:"mango",
        color:"orange"
    },
    {
        fruitName:"kiwi",
        color:"green"
    }
]

fruitMe.forEach((item)=>{
    console.log(item.fruitName);
    
})