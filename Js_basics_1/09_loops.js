// JavaScript Loops

// Loops are used in JavaScript to perform repeated tasks based on a condition. 
// Conditions typically return true or false. A loop will continue running until the defined condition returns false.

// There are several types of loops in JavaScript:

// 1. For Loop
// The for loop is the most commonly used loop. It has three parts: initialization, condition, and increment/decrement.

for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}

// Explanation:
// - Initialization: let i = 0; (initializes the loop counter i to 0)
// - Condition: i < 5; (the loop runs as long as i is less than 5)
// - Increment: i++ (increases the loop counter by 1 each time the loop runs)

// 2. While Loop
// The while loop runs as long as the specified condition is true.

let j = 0;
while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}

// Explanation:
// - Initialization: let j = 0; (initializes the loop counter j to 0)
// - Condition: j < 5; (the loop runs as long as j is less than 5)
// - Increment: j++ (increases the loop counter by 1 each time the loop runs)

// 3. Do-While Loop
// The do-while loop is similar to the while loop, but it will always execute the block of code once before checking the condition.

let k = 0;
do {
    console.log("Do-While Loop iteration: " + k);
    k++;
} while (k < 5);

// Explanation:
// - Initialization: let k = 0; (initializes the loop counter k to 0)
// - The loop will run the code block once before checking the condition k < 5.

// 4. For-In Loop
// The for-in loop is used to iterate over the properties of an object.

const person = {fname: "John", lname: "Doe", age: 25};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Explanation:
// - The loop iterates over each property in the person object and logs the key and its value.

// 5. For-Of Loop
// The for-of loop is used to iterate over iterable objects like arrays, strings, etc.

const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log("For-Of Loop value: " + num);
}

// Explanation:
// - The loop iterates over each value in the numbers array and logs the value.
