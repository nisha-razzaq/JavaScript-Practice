 //Control flow
  
 if (true) {
        console.log("This will always run") //will print the message
 }
 
 if(2 == "2") //conversion is done and 2 is equal to '2'
 {
    console.log("This will run because 2 is equal to '2'") //will print the message
 }

 //if u want strict comparison use === operator
 if(2 === "2") //strict comparison is done and 2 is not equal to '2'
 { 
    console.log("This will not run because 2 is not equal to '2'") //will not print the message
 }

 //Strict checking for other operators
 //for != it will be !==
 
 //Nested if-else
    let num=20;
    if(num !== 10) 
    {
        if(num>10)
        {
            console.log("Number is greater than 10") //will print the message

        }
        else
        {
            console.log("Number is less than 10") //will not print the message
        }
    }
    else
    {
        console.log("Number is equal to 10") //will not print the message
    }


    //Detecting object is empty or not
    const obj = {}
    if(Object.keys(obj).length === 0) //checking if the object is empty or not
    {
        console.log("Object is empty") //will print the message
    }


    //there are many other control flow statements like 
    // switch,break,continue,for loop ,while loop,do-while loop which we already know from other programming languages. 

    //Falsy values in javascript are: 
    //false, 0, -0, 0n, "", null, undefined, NaN


    // all others are truthy values.
    // e.g("0", "false", [], {}, function(){} are all truthy values)
    //any empty object or array is a truthy value in javascript.
    // anything written in a string is a truthy value in javascript.

    //Nullish coalescing operator (??) is used to check if a value is 
    //null or undefined and return a default value if it is.
    let val1 = 5 ?? 10 //will return 5 because val1 is not null or undefined
    console.log(val1) //will print 5