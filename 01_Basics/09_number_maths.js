//Number and Math in js


let number = 10 
console.log(number) //will print 10
console.log(typeof number) //will print number

//Another way of strictly declaring number
let number1= new Number(20)
console.log(number1) //will print [Number: 20]

let number2 = String(number1)
console.log(number2) //this will represent 20 but as a string
console.log(typeof number2) //string

let a = 234.0986
console.log(a.toPrecision(5)) //234.10 (Precision means total count of digits excluding .)

console.log(a.toFixed(3)) //234.099 (fixed means no of digits after decimal point)
 
let w = 100000000000000000
console.log(w.toLocaleString())

//---------------------------------Maths-----------------------------------------

console.log(Math.max(2,9)) //returns the max value

console.log(Math.min(2,9)) //returns the min value

console.log(Math.abs(-10)) //returns the  +10 value

console.log(Math.round(2.9)) //returns the 3 value

console.log(Math.floor(2.9)) //returns the 2 value

console.log(Math.ceil(2.9)) //returns the 3 value

console.log(Math.random()) //always gives any random value bw 0 and 1

//If we want a random value acc to our choice
let max= 10
let min= 5
console.log(Math.floor(Math.random()*(max-min+1))+min)