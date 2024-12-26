const accountId = 123456; // value can't be changed anyhow thorought the program

let accountMail = "sanskar@gmail.com"

var name = "Sanskar"; // let and var can be changed throughout the program

accountAge = 20;//dynamic declaration

console.table({accountId, accountMail, name, accountAge})


accountMail = "sanskar123@gmail.com"

name = "Sanskar Singh"//dynamic declaration

accountAge = 21;

let accountState; //undefined

console.table({accountId, accountMail, name, accountAge , accountState})
 //we don;t use var because it is not block scoped and it can be changed throughout the program
    //we use let because it is block scoped and it can be changed throughout the program

/*
 Never use var becuase of functional scope and it can be changed throughout the program
 */
