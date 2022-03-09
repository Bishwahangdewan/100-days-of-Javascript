//Pass By Value and Pass By Refernce

//In pass by value you cannot modify a variable.When a value is assigned to a variable It is stored in a memory location when the value is changed the another value is stored in another memory location.
var num = 10;  //10 is directly assigned to variable num nad is stored in a memopry location
num = 15; //10 is overridden by another number 15 that sits in another memory location

var num2 = num;
num2++;

console.log(num);   //15
console.log(num2);  //16

//Here num2 gets a copy of num1 which is 10 so the valueof num1 remains the same.

//Pass by refrence: The variable does not directly contain a value but an address to memory where the value is stored
var obj = {
    name: "Bissi",
    age: 22
}

var obj2 = obj; //copies address of obj to obj2.

obj2.age = 25;

console.log(obj);   //age 25
console.log(obj2);  //age 25

//Although we changed the age of obj2 to 25 , the age of obj1 is also changed this is because both the variables are pointing towars the same object in the memory. Same happens with arrays as well

var arr1 = [1, 2, 3];
var arr2 = arr1;
arr2.push(4);

console.log(arr1); //1234
console.log(arr2);  //1234

//So in order to copy an array and not the refrence to another variable we use concat
var arr3 = [1, 2, 3];
var arr4 = [].concat(arr3);

arr4.push(5);
console.log(arr3); //123
console.log(arr4); //1235

//For objects
var obj3 = {
    name: "Bissi",
    age: 22
}

var obj4 = Object.assign({}, obj3);
obj4.age = 25;
console.log(obj3);
console.log(obj4);



