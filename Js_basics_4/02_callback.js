//A callback is a function passed as an argument to another function. The callback function is executed inside the outer function to complete some kind of action.
 
function sum(a,b){
    console.log(a+b)
}


function calculator(a, b , sumCallback){
    sumCallback(a,b);


}
//if no callback is written still it will be a callback.

calculator(4 , 6 , sum);

//here the function should not be written with parentheses as in ();
//else it will show the compiler that the fn is executed thena nd there and will give error

//we can also use arrow function to directly pass the fucntion as an argument

calculator(4 , 89 , (a,b)=>{
    console.log(a+b);
    
});


//What is callback hell?
//Callback hell is a term used to describe a situation when you have multiple nested callbacks that make the code hard to read and maintain. 
//It usually happens when you have multiple asynchronous operations that depend on each other.
//They form a pyramid shape, which is why it's called "callback hell" or "pyramid of doom."



//Callback hell example
 


