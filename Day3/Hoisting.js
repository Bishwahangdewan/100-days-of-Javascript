//In other programming languages (C,Java,etc) variables has to be declared before using it otherwise it will trow an err. However in Javascript we have the concept of hoisting. 

//Execution context has Creation phase and execution phase. During the creation phase the variables and functions are assigned with memory.

//If a variable is created any where in your code , the js engine ( in creation phase before executing the entire code) is going to allocate space in the memory heap for the variable and set it to undefined even if the variable has been assigned a value in your code. This is partial hoisting.

//However functions are hoisted fully ie the contents inside of it are also stored;

//CASE 1 : VARIABLE HOISTING
console.log(value);             //logs undefined
var value = 4;


//CASE 2 : FUNCTIONAL HOISTING
sayHi();                        //logs HI!
function sayHi() {
    console.log("Hi!");
}



//Everytime a function is called , Hoisting happens again. For each function , a functional execution context is created.The variables inside it are declared undefined in the beginning and if there is a function then it is hoisted fully.

var favouriteFood = "grapes";

function foodThoughts() {
    console.log("Old Favourite Food = " + favouriteFood); //will log undefined

    var favouriteFood = "mango";

    console.log("New Favourite food = " + favouriteFood); //will log mango
}

foodThoughts();


//It is best practice to avoid hoisting because code should be predictable. So in order to avoid hoisting use Let and Const variable types coz hoisting is not supported in let and const and it returns error

console.log(val); //will throw  Refrence error : Cannot access 'val' before initialization

const val = 1;    //works on both let and const.