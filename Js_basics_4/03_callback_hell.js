// function getData(dataId){
//     setTimeout(()=>{
//         console.log(`Data is of id ${dataId}`);
//     })
// }

// //this will give me data id as inmput
// //Data is of id 1
// getData(1);
// //Data is of id 2
// getData(2);
// //Data is of id 3
// getData(3);

//But the out put will come instantly oof all the data ids
//But I need data 1 to bbe printed first then second and then third
//This is where callback comes in
//We cann give it a callback saying getNextData

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log(`Data is of id ${dataId}`);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
//getData(1, getData(2));//We cant use like that because the second function got parantheses
//we will use arrow function
getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});
//this nested looks like a pyramid
//this is called callback hell
//this is not a good practice
//this is bad for code readability
//this is bad for code maintainability
//this is bad for code debugging
