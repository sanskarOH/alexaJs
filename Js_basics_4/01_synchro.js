//Synchronous actions mean that the code is exefcuted in sequesce , that means the next instruction waits for the previous one to finish.
//Asynchronous actions means that the code is executed in parallel with the rest of the code, that means the next instruction does not wait for the previous one to finish.


// function hello(){
//     console.log("Hello Worlsd");
    
// }



//setTieout is used to delay the execution of the function

// setTimeout(hello, 2000);

//arrow approach


console.log(1);
console.log(2);




setTimeout(()=>{
    console.log("Wassup buddy");
}, 4000);

console.log(3);
console.log(4);

// synchronously the code is executed in sequence
//but when setTimeout or asynchronous approach is used then the code is executed in parallel

