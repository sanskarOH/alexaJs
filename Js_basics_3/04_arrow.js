//This keyword - tells about current context

const user = {
    username : "Sanskar",
    price : 799,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the Website`);
        //this access the vars from current context so that even if sommeone changes the user name , the out put will be correct
        console.log(this);

    }
}//this is my current context

user.welcomeMessage()//I get Sanskar, welcome to the Website
//Which is correct now if I do:
user.username = "Akash"
//Now when I call the function it will update it due to this updating the current context
user.welcomeMessage()
//Context is ki about what we are talking

//in node we get {} when executing the this
console.log(this)
//but in the browser we will get the most global object called window object


// function vadaPav(){
//     let username = "Sanskar"
//     console.log(this)//gives a lot of values  when used standalone
//     console.log(this.username);//will return undefined
// }
// vadaPav()//gives a lot of values 
// //this means this has a lot of things


//Arrow Functions

const addTwo = (num1 , num2) =>{
    return num1 + num2;
}

//Implicit return
//const addTow = (num1 , num2) => num1 + num2 or (num1 + num2)
//when using parantheses at end we don;t need return statement
//but when usinng {} we need return  keyword
//also to return object we need to use parantheses ()
console.log(addTwo(67,33))