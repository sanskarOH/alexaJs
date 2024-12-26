//let var const
// let is block scoped
// var is function scoped
// const is block scoped


// var
var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

//let
let name1 = "John Doe";
console.log(name1);
name1 = "Steve Smith";
console.log(name1);

//const
const name2 = "John Doe";
console.log(name2);
//name2 = "Steve Smith"; //error

//const with object
const person = {
  name: "John",
  age: 30,
};
console.log(person);

//scope of let var const example
// var
//can be accessed outside the block like global scope to nearest function
var a = 1;
let b = 2;
const c = 3;

console.log("Global Scope: ", a, b, c);

function test() {
  var a1 = 4;
  let b1 = 5;
  const c = 6;
  console.log("Function Scope: ", a, b, c);
}

//console.log(b1); //error//b1 is not accessible but b is because global scope
//console.log(a1); //error

test();
