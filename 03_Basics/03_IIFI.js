//IIFI : Immediately Invoked Function Expression

//named IIFE
(function namedIIFE(){
    console.log("Hello, I am an IIFE!");
})(); //semicolon is optional but recommended to avoid issues
      // with automatic semicolon insertion

//Arrow function with IIFE
//unanmed IIFE
((name) => {
    console.log(`Hello, I am ${name} with arrow function!`);
})("Sara"); //semicolon is optional but recommended to avoid issues
      // with automatic semicolon insertion