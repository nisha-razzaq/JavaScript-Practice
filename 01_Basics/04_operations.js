
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/3)
console.log(2%5)
console.log(2**2) // ** acts as power

console.log("1" + 2) //12
console.log(1+"@")   //1@
console.log("1" + "2") //12
console.log("1" +2+3) //123
console.log(2+3 + "1") //51
console.log(2 + "3" + "1") //231

console.log(3+4*5) //23
console.log(3+4*5%3) //5

console.log(true)  //true
console.log(+true) //1 cuz + makes its mathematical
console.log(-true) //-1
// console.log(true+)  //error
// console.log(++true) //will give an error

console.log(false)  //false
console.log(-false) //-0

//Prefix & Postfix operators
let n = 6;
let a = ++n
console.log("a = ",a)
let b= ++a + (++a)+ a
console.log("b = ",b)

let c = 10;
let d= c++
console.log("d = " ,d)
let e= c++ + (c++) + c
console.log("e = ",e)

console.log(+"") //0