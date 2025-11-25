const myNums=[1,2,3,4];
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and current value : ${currval}`);
    
//     return acc+currval;
// },0)

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
    //console.log(`acc: ${acc} and current value : ${curr}`);
console.log(myTotal);

const shoppingCart=[
    {itemName:'js course',
        price:2999
    },
    {itemName:'web course',
        price:3999
    },
    {itemName:'mobile course',
        price:12999
    },
    {itemName:'ruby course',
        price:999
    },
    {itemName:'python course',
        price:1099
    },
    {itemName:'java course',
        price:10999
    }
]
const bill=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(bill);

