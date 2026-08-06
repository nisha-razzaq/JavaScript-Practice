 //for of loop
 //for of loop is used to iterate over iterable objects 
 // like arrays, strings, maps, sets etc.

 const arr = [1,2,3,4,5]
 for(const value of arr){
     console.log(value) //will print the value of each element in the array
 } //no need of index to access the elements of the array

 //for of loop over strings
    const str = "Hello"
    for(const value of str){
        console.log(value) //will print the value of each character in the string
    }

    //for of loop over maps
    const map = new Map()
    map.set("name", "John")
    map.set("age", 30)
    map.set("isStudent", true)
    for(const [key, value] of map){
        console.log(key, value) //will print the key and value of each entry in the map
    }

    //---------------- for each loop ----------------
    //for each loop is used to iterate over arrays and objects
    const arr1 = [1,2,3,4,5]
    //in for each loop we can pass a callback function
    //as an argument which will be called for each element in the array
    arr1.forEach(function(value){
        console.log(value) //will print the value of each element in the array
    })     
    
    //can also use arrow function in for each loop
    arr1.forEach((value) => {
        console.log(value) //will print the value of each element in the array
    })

    //Using print me funcrtion in for each loop
    function printMe(value){
        console.log(value) //will print the value of each element in the array
    }
    arr1.forEach(printMe) //will call the printMe function for each element in the array

    //for each loop doesnot return anything and it cannot be used with 
    // break or continue statements