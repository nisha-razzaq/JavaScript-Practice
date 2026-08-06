
//const obj  = {} //creating an empty object using the object literal syntax 
const obj = new Object() //creating an empty object using the Object constructor
obj.name = "John" //adding a property to the object
obj.age = 30 //adding a property to the object
obj.isStudent = true //adding a property to the object
console.table(obj) //will print the object

//Nested objects
const obj1 = {
    name : "John",
    age : 30,
    isStudent : true,
    address : {
        street : "123 Main St",
        city : "New York",
        state : "NY"
    }
}
console.table(obj1) //will print the object
console.log(obj1.address.street) //will print the value of the street
                                 // property of the address object

//Object in another object
const  obj2= {1:2,3:4,5:6} //creating an object with 5 properties
const obj3= {7:8,9:10,11:12} //creating an object with 5 properties
const obj4 = {obj2,obj3} //creating an object with 2 properties which are objects
console.table(obj4) //will print the object
console.log(obj4.obj2[1]) //will print the value of the property 1 of the obj2 object
console.log(obj4.obj3[7]) //will print the value of the property 7 of the obj3 object

//using Object.assign() to copy properties from one object to another
const obj5 = {name : "John", age : 30} //creating an object with 2 properties
const obj6 = {isStudent : true} //creating an object with 1 property
Object.assign(obj5,obj6) //will copy the properties of obj6 to obj5
console.table(obj5) //will print the object with the copied properties

//Using spread operator
const obj7 = {name : "John", age : 30} //creating an object with 2 properties
const obj8 = {isStudent : true} //creating an object with 1 property
const obj9 = {...obj7,...obj8} //will create a new object with the properties of obj7 and obj8
console.table(obj9) //will print the new object with the copied properties

//Objects in an array
const arr = [{name : "John", age : 30}, {name : "Jane", age : 25}] //creating an array with 2 objects
console.table(arr) //will print the array of objects
console.log(arr[0].name) //will print the value of the name property of the first object in the array
console.log(arr[1].age) //will print the value of the age property of the second object in the array

//fetching keys and values of an object
const obj10 = {name : "John", age : 30, isStudent : true} //creating an object with 3 properties
console.log(Object.keys(obj10)) //will print the keys of the object
console.log(Object.values(obj10)) //will print the values of the object
console.log(Object.entries(obj10)) //will print the key-value pairs of the object as an array of arrays

//Finding either a property exists in an object or not
const obj11 = {name : "John", age : 30, isStudent : true} //creating an object with 3 properties
console.log(obj11.hasOwnProperty("name")) //will return true if the property exists in the object
console.log(obj11.hasOwnProperty("gender")) //will return false if the property does not exist in the object