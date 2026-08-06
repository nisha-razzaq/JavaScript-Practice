

let obj = {
    name : "John",
    age : 30,
    isStudent : true,
}

console.table(obj) //will print the object
console.log(obj.name) //will print the value of the name property
console.log(obj.age) //will print the value of the age property
console.log(obj.isStudent) //will print the value of the isStudent property

//Accessing properties using bracket notation
console.log(obj["name"]) //will print the value of the name property
console.log(obj["age"]) //will print the value of the age property
console.log(obj["isStudent"]) //will print the value of the isStudent property

//Symbol properties
let sym = Symbol("id")
obj[sym] = 12345 //will add a symbol property to the object
console.log(obj[sym]) //will print the value of the symbol property

//Greeting function
function greeting(){
    console.log("Hello " + this.name) //will print the greeting with the
                                      // name property of the object
}
greeting.call(obj) //will call the greeting function with the obj as the context

//Freezing the object   
Object.freeze(obj) //will freeze the object and prevent any modifications
obj.name = "Jane" //will not change the name property of the object
console.log(obj.name) //will print the value of the name property which is still "John"
