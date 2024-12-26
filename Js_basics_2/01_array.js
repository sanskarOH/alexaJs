//array
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//printing the array
console.log(myArr)
//mdn link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//elements can be of different types
const My2 = ["hello",1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(My2);
//typeof Array
console.log(typeof myArr);//object
//in Javascript arrays are resizable


//Accessing elements of an array
console.log(myArr[0]);//1

//Arrays will always be shallow copied
//Meaning if you copy an array to another array, the copied array will be a reference to the original array

const test1 = [1, 2, 3, 4, 5];
console.log(test1);
const test2 = test1;
test2[2] = 100;
console.log(test1);//[1, 2, 100, 4, 5]
//hence the arrays share same reference point
//because they are stored in heap memory

//another way to declare an array
const test3 = new Array(1, 2, 3, 4, 5);
console.log(test3[2]);//3

//Array methods
//push method
test1.push(6);
console.log(test1);//[1, 2, 100, 4, 5, 6]
//tyepof Array
console.log(typeof test1);//object
const newA = test1.join();
console.log(newA);//1,2,100,4,5,6
//got converted to string

//slice method
const newB = test1.slice(1, 3);
console.log(newB);//[2, 100]
//3 is not included
//splice method
const newC = test1.splice(1, 3);
console.log(newC);//[2, 100, 4]
//difference between slice and splice
//slice does not change the original array
//splice changes the original array

const na = [1, 2, 3, 4, 5];
const nb = na.slice(1, 3);
console.log(nb);//[2, 3]
console.log(na);//[1, 2, 3, 4, 5]
//na remains same
//but in splice
const nc = na.splice(1, 3);
console.log(nc);//[2, 3, 4]
console.log(na);//[1, 5]
//na changes it removes the elements from the array