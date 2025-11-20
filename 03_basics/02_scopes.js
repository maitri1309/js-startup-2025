//var c=300
let a=300
if(true){
    let a=10
    const b=20
    //sconsole.log("inner: ",a);
}

//console.log(a);
//console.log(b);
//console.log(c);





function one(){
    const username="maitri"
    
    function two(){
        const webiste="amazon"
        console.log(username)
        //console.log(webiste);
    }
    //console.log(webiste);
    two()
}
one()

if(true){
    const username="maitri"
    if(username==="hitesh"){
        const webiste="yt"
        console.log(username + webiste);
        
    }
    //console.log(webiste);
    
}
//console.log(username);


//*****INTERESTING*********
console.log(addone(5));

function addone(num){
    return num + 1;
}

addTwo(5)
const addTwo=function(num){
    return num+2

}
