//Functions in Objects
//Shopping Cart logic

function calculateCartPrice(...num1){
    return num1
}
//for one value its okay
console.log(calculateCartPrice(3))
//for too many values we can use rest cum spread operator ...
console.log(calculateCartPrice(3 ,300 ,3003))

//it means to bundlise all the data getting to thhe function

//now what if I have another funtion 

function cart2(val1,val2,...num1){
    return num1;

}
console.log(cart2(3 ,300 ,3003))//this will return only 3003
//that is because the first two values given to the val1 and val2 var

const user = {
    username : "hitesh",
    price : 99,
    email : "sanskar@google.com"
}


//check for type checking in while accessing object attributes for correct name
function objectHandler(anyobject){
    console.log(`Username is ${anyobject.username}`);
    console.log(`Price is ${anyobject.price}`);
    console.log(`Email is ${anyobject.email}`);
}

objectHandler(user)
//we can also directly pass objects raw
objectHandler({
    username : "Sanskar",
    price : 199,
    email : "hitesh@google.com" 

})

//passing arrays in parameters or arguments

const ArryaN = [1,2,3,4,5,66]
function returnval(getArray){
    return getArray[1];
}
console.log(returnval(ArryaN))