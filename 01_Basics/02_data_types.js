let name = "Nisha"  //a string datatype (no need to declare with string datatype)
let phone_no = 12334 // number (int) datatype
let id = '1'   //there is no char datatype in JS (considered as string)
let id1 = 12345678900987654321n //n is denoting bigint data type

console.table([name,phone_no,id])

//type of is used to find type of varaible
console.log("type of name: " , typeof (name)) //can put in () or without () 
console.log("Type of id: " , typeof id)//output will be automatically
                                       //on the next line

console.log("Type of null: " , typeof null)
console.log("Type of undefined: " , typeof undefined)

//can display types in table form as well
console.table([typeof name, typeof id , typeof phone_no])

console.log(Number.MAX_VALUE) //max no number datatype can represent
console.log(Number.MIN_VALUE) //min no number datatype can represent