//Scope is the lexical environment of an execution context

let a = 10;

function Num() {
    console.log(a);     //returns 10 Scope of function num is global exec context so it will look for a there.
}

Num();



//Scope chain : the inner most function's scope will be its outer functional context and this goes on until the GEContext reaches

function outer() {
    var b = 20;

    return function inner() {
        console.log(b + " " + a)  //logs 20 10 
    }
}

outer()();

/*the above call is similar to

var returnedFunction = outer()
returnedFunction();

*/


//VARIABLE LEAKAGE



function leakage() {
    x = 5;
    console.log(x);
}

leakage();

//this will return 5 but the variable environment inside the FEContext wont be created instead it will reach its outer scope and x is created in global. In order to prevent this use strict at the very top of the code. Use strict prevents javascript unusual behaviours.