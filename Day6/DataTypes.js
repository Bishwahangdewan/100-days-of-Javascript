//Types in Javascript

//PRIMITIVE : 
console.log(typeof (5)); //number
console.log(typeof ('Hello There!')); //string
console.log(typeof (true)); //Boolean
console.log(typeof (undefined)); //undefined
console.log(typeof (null)); //object  ...... this is a  mistake in itself
console.log(typeof (Symbol('hi there'))); //symbol


//NON PRIMITIVE:
console.log(typeof ({})) //object
console.log(typeof ([])) //object
console.log(typeof (function () { })) //function


//In Primitive Data Type Types the values are immutable that can be assigned with a new value but cannot be modified after creation
var prim = 5;
prim = 10 //possible
prim = 'yo oy' //not possible


//In Non Primitive Data Type  values can be modified
var nonprim = [1, 2, 3];
nonprim[1] = 'Yo yo'; //possible

//In Primitive Data Type, data is passed by value that mean the variable contains the data itself. In Non Primitive Data Type data is passed by Refrence that is the variable contains a refrence to the memory where that object is stored.


//Function is also an object in javascript although it's type is function
function temp() {
    console.log('temp')
}

temp.hi = "Hi";
console.log(temp.hi); //this will print Hi


//Everything is object in Javascript 
console.log(true.toString()); //will print 'true'

//The reason we can use object properties in a variable is because Javascript behind the scenes wraps the variable with an object so the code looks like
//Boolean(true).toString();



