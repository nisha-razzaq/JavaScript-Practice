//function of adding 2 numbers
//writing datatype of parameters in function is optional in javascript
function add(a,b){
  console.log(a+b) //will print the sum of a and b
}
console.log(add(2,3)) //will print the sum of 2 and 3

console.log(add(5,null)) //will print the sum of 5 and null

//storing function in a variable
let result = add(2,3)
console.log(result) //undefined will be printed because the add function does not return any value

//Add function with return statement
function add1(a,b){
  return a+b //will return the sum of a and b
}
console.log(add1(2,3)) //will print the sum of 2 and 3
console.log(add1(5,null)) //will print the sum of 5 and null
console.log(add1(5,undefined)) //will print NaN because undefined is not a number
console.log(add1(5,"Hello")) //will print 5Hello because 5 is a number and "Hello" is a string

//Rest operator in function
function add2(...args)
{
    return args
}
console.log(add2(1,2,3,4,5)) //will print the array of arguments passed to the function

function add3(a,b,...args)
{
    return args
}
console.log(add3(1,2,3,4,5)) //will print the array of arguments passed to the function except the first 2 arguments