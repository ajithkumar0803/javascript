//Callback
/*
function ramuSomu(welcomeMessage,callback){
    setTimeout(function(){
        console.log(welcomeMessage)
        callback();
    },2000)
}
function mancan(){
    console.log("Thambi Poyiru!!!")
}
ramuSomu("Hello Ramu and Somu\nWelcome to KEC ",mancan)
*/

//Callbacks
// Form Submission Example
function submitform(buttonClick,db){
    setTimeout(function(){
        console.log(buttonClick)
        db();
    },2000)
}
function db(){
    console.log("Form Submit Success")
}
submitform("Form Submit button clicked",db)
