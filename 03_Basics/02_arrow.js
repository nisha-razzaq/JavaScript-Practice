//This in object
const obj = {
    name : "John",
    age : 30,
    isStudent : true,
    greeting : function(){
        console.log("Hello " + this.name) //will print the greeting with the name property of the object
    }   }
    console.table(obj) //will print the object
    obj.greeting() //will call the greeting function of the object
    obj.name = "Jane" //will change the value of the name property of the object
    obj.greeting() //will call the greeting function of the object with the updated name property
    console.log(this) //points to the global object in non-strict mode and undefined in strict mode
                      //  an empty object in the case of a module

// This in a function
function greeting1(){
    let name = "John"
    console.log("Hello " + this.name) // will print hello undefined because this points to the global object in non-strict mode and undefined in strict mode    
}
greeting1() //will call the greeting1 

function greeting2(){
     name = "John"
    console.log("Hello " + this.name) // will print hello John
}
greeting2() //will call the greeting1 

//----------------------Arrow function----------------------
//() => {} (basic synatax of an arrow function)

const a = (num1,num2) => {
    return num1+num2 //will print sum
}
console.log(a(2,5))

//Another way of writing an arrow function
const b = (num1,num2) => num1+num2 //will print sum
console.log(b(2,5))

//Another way of writing an arrow function
const c = (num1,num2) => (num1+num2) //will print sum
console.log(c(2,5))

//Returning an object from an arrow function
const d = (num1,num2) => ({sum:num1+num2}) //will return an object with the sum property
console.log(d(2,5)) //will print the object with the sum property

// //Returning an object from an arrow function
// const d = (num1,num2) => {sum:num1+num2}//will return an error
// console.log(d(2,5)) 
