//Stack Vs Heap Memory

//Stack Memory: (Number, String, Boolean, Null, Undefined, Symbol)
// - Stores primitive data types
// - Data is stored in a LIFO (Last In, First Out) manner
// - Memory is allocated and deallocated automatically

//Heap Memory: (Array, Object, Function)
// - Stores non-primitive data types
// - Data is stored in a more complex manner
// - Memory is allocated and deallocated manually

let name = "Nisha"  //stored in stack memory
let name2 = name //copy of name is created in stack memory
name2= "Ali"
console.log(name) //original name will not get changed

let array =[1,2,3,5] 
let array2 = array //copy of array is created in heap memory
array2[0] = 10
console.log(array) //original array will also get changed
console.log(array2) //will show the modified array
