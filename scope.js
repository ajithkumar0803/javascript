//Global Scope
/*
Sum = 0
for(var i=0;i<10;i++){
    Sum += i
}
console.log(Sum)
i=0
do{
    Sum+=i
    i++
}while(i<10);
console.log(Sum)
i=0
while(i<10){
    Sum+=i
    i++
}
console.log(Sum)
*/

//Local Scope
/*
for(let i=0;i<5;i++){
    console.log(i+11)
}
console.log(i)
*/

//Block Scope
/*
// Without let
var a = 10
console.log(a)
{
    a = 5;
    b = 5;
    console.log(a)
    console.log(b)
}
console.log(a)
// With let
var a = 10
console.log(a)
{
    let a = 5;
    let b = 5;
    console.log(a)
    console.log(b)
}
console.log(a)
*/