//singleton - form from constructor 
//when we declare from literals then no singleton is formed


//object literals

//use constructor method
//Object.create



//using symbol in object as a key
const mySym  = Symbol('key1')
//data is stored in form of key value pairs
const js_user = {
    name : "Sanskar",
    //what is we have string key 
    "full name" : "Sanskar Diwedi",//this can never be accessed using . approach
    [mySym] : "myKey1",
    age : 12,
    email : "sanskar@google.com",
    college : "SRM University",
    islogged : true

}

// way of accessing object
//console.log(js_user.email)
//Better approach {for interviews only or special cases else use .approach}
// console.log(js_user["email"])
// console.log(js_user["full name"])
// console.log(js_user["mySum"]);


//changing values
js_user.email = "Sanksar@mail.com"
//you can also lock your object values 
// Object.freeze(js_user);
js_user.email = "sanskaryyeeha@mail.com"//this will no be propogated


// console.log(js_user)



//function in js can be used as vars 
//and be used in objects

js_user.greeting = function(){
    console.log(`Hello ${js_user["full name"]}`)
}
//this - is uused to refer to the current object
//`Hello Js user , ${this.name}`

console.log(js_user.greeting())
//if we only put js_user.greeting then the function wont be executed but referenced