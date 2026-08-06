
//Array is a non-primitive data type (stored in heap memory)
let a = [1,2,3,4,5] //will create an array with 5 elements
console.table(a) //will print the array
console.log(a.length) //will print the length of the array
console.log(a[0]) //will print the first element of the array
console.log(a[4]) //will print the last element of the array

//Declaring an array with different data types
let b = [1, "Hello", true, null, undefined] //will create an array 
                                            //with different data types
console.table(b) //will print the array
console.log(b.length) //will print the length of the array
console.log(b[0]) //will print the first element of the array
console.log(b[4]) //will print the last element of the array

//Arrays methods
 
a.push(6) //will add an element to the end of the array
console.table(a) //will print the array after adding an element

a.pop() //will remove the last element of the array
console.table(a) //will print the array after removing 
                 //the last element

console.log(a.indexOf(3)) //will print the index of the element 
                          //3 in the array

console.log(a.includes(3)) //will check if the element 3 is
                           // present in the array 
                           //and return true or false

console.table(a.reverse()) //will reverse the array

console.table(a.sort()) //will sort the array in ascending order

console.table(a.sort((a,b)=>b-a)) //will sort the array
                                  // in descending order

console.log(a.unshift(0)) //will add an element to the
                          // beginning of the array 
                          //and return the new length of the array

console.table(a) //will print the array after adding an 
                 //element to the beginning

console.log(a.shift()) //will remove the first element of the
                       // array and return it

console.table(a) //will print the array after removing
                 // the first element

let a1 = a.join(",") //will join the elements of 
                     //the array with a comma and return a string

console.log(a1) //will print the string



//---------------------Diff bw slice and splice-----------------------------
//Slice:
//1. Slice does not modify the original array, 
//   it returns a new array with the selected elements
//2. Slice takes two arguments, the start index and the 
//   end index (end index is not included)

let a2 = [1,2,3,4,5] //will create an array with 5 elements
console.table(a2) //will print the array

console.table(a2.slice(1,3)) //will return a new array with the
                             // elements from index 1 to 2 (3 is not included)
console.table(a2) //will print the original array

//Splice:
//1. Splice modifies the original array,
//   it removes the specified elements and returns them
//2. Splice takes two or more arguments, the start index
//  and the number of elements to remove

console.table(a2.splice(1,3)) //will remove 3 elements from index 1
console.table(a2) //will print the original array after removing the elements