"use strict"; //trea the code in strict mode or in newer version of js

alert("Hello World!")//won;t work in node js it is in a documnet windows or browser

//the most important thing in coding is readability of code
//use as less as possible semi-colons

console.log(3
    +3//it will work but it is not a good practice and it is not readable
)

//original docs of js are at tc39.es
//you can also refer to mdn docs link https://developer.mozilla.org/en-US/docs/Web/JavaScript

//there are 7 datatypes in js
//primitive datatypes
//1. Number
let number = 3; //range is from -2^53 to 2^53 and bigInt is used for bigger numbers
//2. String
let string = "Hello World";
//3. Boolean
let boolean = true;
//4. Undefined
let undefinedVar = undefined;
//5. Null
let nullVar = null;//standalone value is object type
//6. Symbol
let symbol = Symbol("symbol");//to create unique values
//user defined datatype
//7. Object
let object = {
    name: "Sanskar",
    age: 20
}
