// 

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{
//     return num>4})

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);


const books=[
    {title:'book one',genre:'Fiction',publish:1981,edition:2004},
    {title:'book two',genre:'Non-Fiction',publish:1992,edition:2008},
    {title:'book three',genre:'History',publish:1999,edition:2007},
    {title:'book four',genre:'Non-Fiction',publish:1989,edition:2010},
    {title:'book five',genre:'Science',publish:2009,edition:2014},
    {title:'book six',genre:'Fiction',publish:1987,edition:2010},
    {title:'book seven',genre:'History',publish:1986,edition:1996},
    {title:'book eight',genre:'Science',publish:2011,edition:2016},
    {title:'book nine',genre:'Non-Fiction',publish:1981,edition:1989},
    {title:'book ten',genre:'History',publish:1985,edition:2002}
];
let userBooks=books.filter((bk)=>bk.genre==='History')
userBooks=books.filter((bk)=>{return bk.publish>=1995 && bk.genre==='Science'})
console.log(userBooks);
