//Promises is for "eventual" completionn of task.
//It is an object in JS
//Solution to Callnback Hell

//It has two responses only
//1. Resolve
//2. Reject
//It is used for async operations

//There are three states of promise
//1. Pending
//2. Fulfilled
//3. Rejected

//Lets say we order a pizza
//1. Pending - We order a pizza and it is in the process of making
//2. Fulfilled - Pizza is ready and delivered
//3. Rejected - Pizza is not available

// let promise = new Promise((resolve, reject) => {
//   console.log("Promise Started");
//   //resolve("Success");
//   //   reject("Error");
// });

//When we ask an api to get data, it returns a promise to us
//So we use promises to handle the data

// function getData(dataID, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataID);
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

//We move to console and execute the function by
//let result = getData(1);
//we will get promise in pending state
//because we did not resolve or reject the promise

// function getData(dataID, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataID);
//       resolve("Data Loaded");
//       //reject("Error
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }
//now when we print prommise it will be in fulfilled state

//Promise has two methods
//1. then - to handle the resolve
//2. catch - to handle the reject

// let result = getData(8);
// result
//   .then((response) => {
//     console.log("Data Loaded successfully");
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

//anpther example

function asynfunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("some data 1");
      resolve("Data Loaded 1");
    }, 3000);
  });
}
// console.log("fetching data1");
// let p1 = asynfunc();

// p1.then((res) => {
//   console.log(res);
// });

//what is promise chaining
//When we have multiple promises and we want to
//execute them one after the other
//we use promise chaining

//Example
//I have one more ayncfunc2

function asynfunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("some data 2");
      resolve("Data Loaded 2");
    }, 3000);
  });
}

//now we chain both

console.log("fetching data 1");
let p1 = asynfunc();

p1.then((res) => {
  console.log(res);
  console.log("fetching data 2 ");
  let p2 = asynfunc2();
  p2.then((res) => {
    console.log(res);
  });
});

//This is not a good practice
//This is called promise chaining
//This is bad for code readability


