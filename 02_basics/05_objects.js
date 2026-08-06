// Objects Destructuring
const obj12 = {name : "John", age : 30, isStudent : true} //creating an object with 3 properties
const {name, age: age1, isStudent} = obj12 //destructuring the object into variables
console.log(name) //will print the value of the name property
console.log(age1) //will print the value of the age property
console.log(isStudent) //will print the value of the isStudent property

