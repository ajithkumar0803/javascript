//example2
var kongu = new Object()
kongu["fees"] = 10000
kongu["accomadtion"] = "Excellent"
kongu["food"] = "Pretty Decent"
kongu["hostelCount"] = 10
console.log(kongu)
//for in eg => Output
for (key in kongu){
    console.log(key,kongu[key])
}
//for each eg
kongu.forEach((key,element) => {
    console.log(key,element)
});//Throwing error
