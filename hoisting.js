//Hoisting
//Variable Hoisting
/*
console.log(a)
var a = 10
//The above is similar like
var b 
console.log(b)
// let
console.log(a)
let a = 10
*/
//Functional Hoisting
konguClg(5,10)
function konguClg(a,b){
    for(i=a;i<b;i++){
        if (i%2 == 0)
        {
            console.log("The number",i,"is even")
        }
        else
        {
            console.log("The number",i,"is odd")
        }
    }
}