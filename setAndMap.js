//SET
//1st Eg
/*
setExample = new Set(["aiadmk","bjp","congress"])
console.log(setExample)
setExample.add("dmk")
setExample.add("aiadmk")
console.log(setExample)
//for in 
for (i in setExample)
{
    console.log(i)
}
//for of
for (i of setExample)
{
    console.log(i)
}
*/
//MAP
s = new Map([["blue","green"],["orange","mango"]]) //declare carefull

//for in 
for (i in s)
{
    console.log(i)
}
//for of
for (i of s)
{
    console.log(i)
}

console.log(s.has("blue"))
console.log(s.set("id","10"))
console.log(s.delete("blue","green"))