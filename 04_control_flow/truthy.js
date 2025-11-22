const userEmail = []
if (userEmail) {
    console.log("got user email");
} else {
    console.log("dont have any email");

}
/*falsy
false,0,-0,BigInt 0n,"",null,undefined,NaN
*/
/*truthy
"0",'false'," ",[],{},function(){},
*/
/*
if(userEmail.length===0){
    console.log("Srray is Empty");
}
*/
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}
