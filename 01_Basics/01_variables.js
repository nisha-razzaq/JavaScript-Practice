 //In javascript there is no use of header files
 //and other libraries

 //use of semicolons is not necessary

 //using const will protect var from any future modification
const Acc_Id = 43351 ;

//using let is the most appropriate way
let Acc_Email = "nisharazzaq345@gmail.com"

//Var shouldnot be used to declafre variable due to scope issues
var Acc_Email2 = "nr9322179@gmail.com";

//can use variables without declaration
//but this should be avoided
Acc_Email3 = "bcsf25m507@pucit.edu.pk"

let Acc_status ;  //this is undefined

//Instead of using console log for each output
//we can simply use console table
console.table([Acc_Id,Acc_Email,Acc_Email2,Acc_Email3,Acc_status]);