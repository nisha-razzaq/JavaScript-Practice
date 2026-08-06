//Pushing 1 array into another
let a1 = [1,2,3,4]
let a2 = ["True" , "False"]
let a3=  [1,4,5,7]
console.log(a2.push(a1)) //push will return length of a2 after 
                        // adding a1 into a2
console.log(a2) //will display updated a2

//Accessing elements from updated a2
console.log(a2[2][3]) //will give 3rd value from 2nd index

//Concatenating 2 arrays
console.log(a2.concat(a1)) //concat will return a new array
                           // with the elements of a3 and a1

//Spreading 2 arrays
console.log([...a2,...a1]) //will return a new array with the
                           // elements of a2 and a1

//Difference between concat and spread operator and pushing 1 array 
//into another

//1. Concat and spread operator will return a new array with the
//   elements of both arrays, while pushing 1 array into another
//   will modify the original array and add the elements of the 
//   pushed array into it   

//Flattening an array
let a4 = [1,2,3,[4,5,6,[7,8,9]]]
console.log(a4.flat(2)) //will return a new array with the 
                        // elements of a4 flattened to 2 levels

//flattening upto infinity
console.log(a4.flat(Infinity)) //will return a new array with the 
                               // elements of a4 flattened to infinity

//Converting string into array
let n1 = "Hello World"
let n2 = "hy"
console.log(Array.from(n1)) //will return an array with the elements of n1
console.log(Array.from(n2)) //will return an array with the elements of n2

//Converting elements into an array
let n3 = 12345
console.log(Array.from(n3.toString())) //will return an array with the elements of n3
console.log(typeof n3) //will return the type of n3 which is number