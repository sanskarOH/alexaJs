//Immediately Invoked Function Expressions (IIFE)

//which are executed asap application is started

function cofee(){
    console.log("Db Connected");
}
cofee();
//here it is connected as well 

//But the main reason is we don;t need global scope pollution
//(function inside)
(function coffe(){//named iife
    console.log("dB iife")
});//to semicolon is needed to end the context for the function else no othr iife will work
//()fucntion second one is () execution call
//we can write it as arrow as well and parameter too
((name)=>{//simple iife
    console.log(`Name : ${name}`);
})('sanskar');