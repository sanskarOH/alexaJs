//Functions in JavaScript
//memory management in javascript


// function SayMyName(){
//     //scope of function
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// SayMyName();
//without parantheses it is just reference 
//but with paranthese it is execution as well

function add(num1 , num2 ){
    //need not to give datatype of numberss
    // console.log(num1+num2)
    return (num1+num2)//tp return the values
    //after return no code will ever be executed
    // console.log("hello");<unreachable code detected

}
// add(3,5.6)
// add(4,"5")
// add(3,"abc")
// add(3,null)

//Difference between parameters and arguments
//Parameters are taken at the definition fo function
// function name(parameter1 , parameter2){}
//Arguments are passed when calling function
//name(argument1,argument2)

//We can also store functions in a variable

// const result = add(4,5)
// console.log(result)

//if I put here username = "sam" then it will be set as default values
//code will atleast get sam as a values if no input is given
function loginUser(username = "sam"){
    //checking for undefined condition
    //empty string or undefined is considerd as false
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `Hello ${username} , just logged-in.`
}
//loginuser("yadav")-will returnn nothing because value is returned but not logged or used anywhere
//not providing any value will give undefined but not null
const res = loginUser("Huuhs");
console.log(res);
