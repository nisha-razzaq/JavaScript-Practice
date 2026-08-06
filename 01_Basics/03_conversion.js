let name = "Nisha"
let  id = 2345

//Converting string into a number
let c_name = Number(name)
console.log(c_name)      // Nan(cuz string cant be converted into no)
console.log(typeof name) //type will be a number

//Converting no in a string
let c_id = String(id)
console.log(c_id)   //now 2345 will be traeted as string
console.log(typeof id) //string

//Conersion of bool datatype
let logged= true
let c_logged = Number(logged)
console.log(c_logged)   //1 as true represents 1 
console.log(typeof c_logged) //number

//Converting null in number
let no = null
let c_no = Number(no)
console.log(c_no); //0
console.log(typeof c_no) //number

//Converting undefined in number
let u = undefined
let c_u = Number(u)
// console.log(c_u)    //NaN
// console.log(typeof c_u) //number
console.table([c_u,typeof c_u])

//Converting empty string into number
let s= ""
let c_s = Number(s)
console.log(c_s) //0 
console.log(typeof c_s)

//Converting empty and non empty strings into boolean
let s1= ""
let c_s1 = Boolean(s1)
console.log(c_s1) 
console.log(typeof c_s1)
let s2= "Nisha"
let c_s2 = Boolean(s2)
console.log(c_s2) 
console.log(typeof c_s2)
