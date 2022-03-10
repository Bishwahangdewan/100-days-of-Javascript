//In Javascript Functions are objects
function def() {
    console.log("default function")
}

//when we create this function it is an object that has certain methods like call , bind and also some properties like name , arguments etc which makes it into an object and with () the block of code can run

console.log(def.name);  //accessing the property
console.log(def.length)
console.log(def.arguments)

//The reason this is important is because if functions are objects in javascript the we can use function in a simiular way as if we are using objects  ie it can be stored in a variable.

//FUNCTIONS ARE FIRST CLASS CITIZENS IN JAVASCRIPT-this means three things

//1 - FUNCTIONS CAN BE STORED IN A VARIABLE

var storeFn = function fn() { console.log('store') };
console.log(storeFn);


//2 - FUNCTIONS CAN BE PASSED AS AN ARGUMENT

function arg(fn) {
    fn()            //logs passed function
}

arg(function () { console.log("Passed function") });

//3 - FUNCTION CAN RETURN A FUNCTION
function a() {
    return function b() {
        console.log("Returned function B");
    }
}

a()();  //logs Return function B


//This 3 reasons and the concept of first class citizens introduces to a whole new world of functional programming.


//RED FLAGS
//Functions should only be declared once

for (let i = 0; i < 5; i++) {
    function foo() {
        console.log("foo")
    }

    foo();
}

//instead of declaring function inside the loop  declare it outside of the loop


function args2() {
    //return data;
}

args2();    //this will return an error because are returning a variable that has not been defined

//To resolve it pass the data inside the argument with a default value

function args3(data) {
    return data;
}

console.log(args3());

//will return undefined because value has not been passed to the data so with es6 we can pass default value

function args4(data = 10) {
    return data;
}

console.log(args4());  //return 10

//Behind the scenes Javascript will create the variable environment for data so we dont have to initialize it inside the function.