//async await akes asynchronous programming simple
//It is used for async operations
//async and await are keywords
//async is used to make a function asynchronous
//await is used to wait for the promise to resolve
//async always returns a promise

// async function hello() {
//   console.log("hello");
// }
//will print hello as well as promise
//link another html to understand
//it will be undefined and pending as no reslove or reject

//await is used to wait for the promise to resolve
//pauses the execution of its surrounding async function until the promise is settled
//await can only beuu used inside an async function

function api(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather data", data);
      resolve(200); //code 200 is for success
    }, 2000);
  });
}

//nw if I use await api(); it will give me an error4

// async function getData() {
//   console.log("getting data 1");
//   await api(1);
//   console.log("getting data 2");
//   await api(2);
// }
//to call the api twice we can use await api(); twice
//this was so easy then promise chaining or callback

//Now here I have to put the code innside a function to call it
//This is where iife comes in
//IIFE - Immediately Invoked Function Expression
//It is a function that runs as soon as it is defined
//converting it
(async function () {
  console.log("getting data 1");
  await api(1);
  console.log("getting data 2");
  await api(2);
})();
//now as soon as the function is defined it will run
//very advanced way of writing code
