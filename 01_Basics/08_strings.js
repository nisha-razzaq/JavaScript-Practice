
let s = "Sara"
let s1 = "Ahmad"
let s2= "          Nisha             "
let s3= "Hello World"
//Concatenating two strings
console.log(s+" " +s1)

//Better way of string concatenation (String interpolation)
console.log(`My name is ${s} and my surname is ${s1}`)

console.log(s.charAt(0)) //will return the character at index 0

console.log(s.length) //will return the length of string

console.log(s.toUpperCase()) //will return the string in uppercase

console.log(s.indexOf("a")) //will return the index of first occurence of a

console.log(s2.trim()) //will return the string after removing the 
                       //white spaces from start and end

console.log(s2.replace("Nisha","Ali")) //will replace Nisha with Ali

console.log(s.includes("Sara")) //will return true if Sara is
                                // present in string else false

console.log(s3.split(" ")) //will return an array of words in the string

console.log(s3.substring(0,5)) //will return the string from index 0 to 5

console.log(s3.slice(0,5)) //will return the string from index 0 to 5

console.log(s1.slice(-5,-2)) //will return the string from index -5 to -2