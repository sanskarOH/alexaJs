//Scope
//What is scope
//it starts with let , var and const

// let a = 50;
// var b = 500;
// const c = 1000;

// console.log(a);
// console.log(b);
// console.log(c);//here we will get all te output

//Why let and const??
//Because var never followed scopes
//{} is called a scope of the function

//if I shift the declaration in a scope of if
// if(true){vv


//     let a = 50;//block scope
//     var b = 500;
//     const c = 1000;

// }
// const j = 100;//global scope
// console.log(a);
// console.log(b);
// console.log(c);//here c will print the values because var
//never follows scope its variable is accessible by whole program
//local scope can access global scope but global scope can't access local scope

let a = 500;
if(true){
    let a = 50;
    console.log(`this is ${a}`);
}
console.log(a);
//this is 50{this will be output because inner one has scope insiide the function only(local scope)}
//500{this has global scope}

//NESTED SCOPE

function one(){
    const username = "Sanskar";

    function two(){
        //function in a function
        const website = "youtube";
        console.log(username)//to check if I can access username inside this funciton
        //it is accessible because a child function can have all variables or data of parent


    }
    //console.log(website)//Can't be accessed inside the one because website is inside tow and not one
    //and hence the parent function cannot access the variables or data from child function
    two()
}
one()



//+++++++++++++++++ INTERESTING CONCEPT ++++++++++++++++++++
//suppose there is a function which logs
//Function
addOne(5)//We can also do this as well and it will work fine
function addOne(num){
    return num+1;


}
// addOne(5)//value is just returned no printed

//Expression
//addTwo(5)--this will give error because function is not yet declared because var has not been initialized
const addTwo = function(num){
    return num+2;
}

addTwo(5)