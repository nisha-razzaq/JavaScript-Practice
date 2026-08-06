//Interview Summary of datatypes in js


// Datatypes are classified into 2 types:
 // 1. Primitive : (call by value)
        //String
        //Number
        //Boolean
        //Big int
        //Null
        //Undefined
        //Symbol
 // 2. Non-primitive: (call by reference)
        //Arrays
        //Objects
        //Functions
    

    //Symbol datatype is for uniqueness 
    //thouugh assigned values are same    
    let id = Symbol ("123")
    let a_id = Symbol ("123")
    console.log(id==a_id) //return false
    console.log(id===a_id) //return false


    //Arrays in js
    let names = ["Ali" , "Hamza"]
    // console.table(names) can be used for more structured output
    console.log(names)

    //Objects in js
    let myobj=
    {
        name :"Nisha",
        age : "18",
    }
    // console.table(myobj)  can be used for more structured output
    console.log(myobj)

    //Function in js
    let myfun = function()
    {
        console.log("Heyyy! How are you?")
    }
    console.log(myfun) //will return the whole function
    myfun() //will execute the function

    //Return types of datatypes
    console.log(typeof id) //symbol
    console.log(typeof names) //object
    console.log(typeof myobj) //object
    console.log(typeof myfun) //function  
    
    //Non-primitive datatypes return types are objects
    // except for function which returns function
    //but on real documentation it is written as
    // function object but in js it is function