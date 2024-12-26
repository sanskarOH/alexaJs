//how to use singleton objects using constructors

//const tinderuser = new Object();//singleton

const tinderuser = {};//non singleton

tinderuser.id = "123asbc";
tinderuser.name = "Sanskar";
tinderuser.islogged = false;

// console.log(tinderuser)


//giving object under objects

const regularUser = {
    email : "sanskar@google.com",
    details:{
        firstname : "Sanskar",
        lastname :  "Diwedi",
        age : 19,
    },
    logstatus : false
}

// console.log(regularUser);
//Output
// {
//     email: 'sanskar@google.com',
//     details: { firstname: 'Sanskar', lastname: 'Diwedi', age: 19 },
//     logstatus: false
//   }

// console.log(regularUser.details.age);//19

//optional chaininng if an object is no present in the variable
//we can use ternary operator syntax

//Obeject can also be combined 
 const obj = {
    1 : "a",
    2 : "b"
 }

 const obj2 = {
    3 : "c",
    4 : "d"
 }
 //can't do 
//  const obj3 = { obj , obj2}
//Use object assign
// const obj3 = Object.assign({} ,  obj , obj2)
//{} is an optional parameter which ensures that values are copied accordingly


//use spread operator 
const obj3 = {...obj,...obj2}
//  console.log(obj3)
//we can take object keys or values in arrayas 
// console.log(Object.values(tinderuser));
//in databse we will get array of objects

const users = [
    {
        id : "1",
        name : "sanskar"
    },
    {
        id : "2",
        name : "Ahem"
    },
    {
        id : "3",
        name : "Gopi"
    }
]

// console.log(users[0].name)

//Destructuring Objects

// const course = {
//     coursename : "Js in hindi",
//     fee : "999",
//     courseInstructor : "Sanskar Diwedi"
// }

//We can access it using course.courseInstructor 
//but when it is to be used multiple times 
//then it does not look clean or good
//rather we can use this approach 

//can even name it according to urself
const {courseInstructor : instructor} = course

// console.log(courseInstructor)
console.log(instructor);

//little react < props> 
//  const navbar = ({comapnay}) =>{
//     // console.log(this.props.company)
//     console.log(comapnay)
//  }

//  navbar(comapnay = "Google.in")

//Api gives data in JSON format 
//stored in key value pair where key as well as value is in string
// {
//     //just basic errors not need to worry
//     "name": "Sanskar",
//     "courseName" : "React basics",
//     "price" : 100

// }

//You can use different json formatters to understand it 
//Maybe we can also get an array of objects in response
