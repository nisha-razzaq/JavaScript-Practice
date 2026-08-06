// Dates and Times in Js

let mydate = new Date() //will return the current date and time
console.log(mydate) //will print the current date and time

console.log(mydate.toString()) //will print the current date and time in a more readable format
console.log(mydate.toDateString()) //will print only the date
console.log(mydate.toTimeString()) //will print only the time

let myCreatedDate =new Date("2024-06-10") //will create a date object with the given date
console.log(myCreatedDate) //will print the created date
console.log(myCreatedDate.toString()) //will print the created date in a more readable format
console.log(myCreatedDate.toDateString()) //will print only the date
console.log(myCreatedDate.toTimeString()) //will print only the time

console.log(myCreatedDate.getFullYear()) //will print the year
console.log(myCreatedDate.getMonth()) //will print the month (0-11)
console.log(myCreatedDate.getDate()) //will print the date (1-31)

console.log(myCreatedDate.toLocaleString()) //will print the date and time in a more readable format according to the locale
 
myCreatedDate.toLocaleString("Default", {weekday: "long"}) //will print the day of the week