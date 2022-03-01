//there are two ways of creating a function , Function assignment and Function declaration

//CASE 1 :FUNCTION DECLARATION - the functions get hoisted during the creation phase of the execution context.

function SayHi() {
    console.log("SayHi!");
}

//Function invokation/call/execution - whenever javascript sees this call it creates a functional execution context
SayHi();


//CASE : FUNCTION ASSIGNMENT - function get hoisted during the runtime i.e the execution phase of the execution context.
var say = function () {
    console.log("Say Hi again!");
}

//Function invokation/call/execution -  whenever javascript sees this call it creates a functional execution context.
say();



//ARGUMENTS - When functional execution context is created it gives us few things (this and arguments)
function user(fname, lname) {
    console.log(arguments);                //{ '0': 'Bishwa', '1': 'Hang' }
    return `Username:${fname} ${lname}`;
}

console.log(user('Bishwa', 'Hang'))

//However its not a good practice to use arguments coz it reduces the performance of the engine so if in the future we have to use this then convert it into array using Array.from or use ... operator to resolve this issue.