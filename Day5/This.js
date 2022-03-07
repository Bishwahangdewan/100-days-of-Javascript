//This is the object that the function is a property of

function outer() {
    console.log(this); //will return the global object coz the function is a property of the global object
}

//outer();


var obj = {
    name: "Mandy",
    sayName: function () {
        console.log("Name is " + this.name) //this will refer to the obj and not global coz now the function is a property of obj
    }
}

obj.sayName();

//use case of this keyword:

//1> It allows us to use the property of the object.
//2> allows to execute the same code for multiple objects


//LOOPHOLE OF THIS KEYWORD

var obj2 = {
    name: "Candy",
    sayName: function () {
        console.log("Say Name = " + this)  //this will refer to the object obj2

        var sayName2 = function () {
            console.log("Say Name 2 = " + this)  //this will refer to the global object
        }

        sayName2();
    }
}

obj2.sayName();

//The reason why Say Name2 will refer to the global object is because In javascript this keyword follows dynamic scoping instead of lexical scoping. That means it does not matter where it was created . It matters how the function was called. SayName was called from obj2 but sayName2 wasn't called from obj2.


//This issue can be solved with ARROW FUNCTIONS -prevents dynamic scope and allows lexical scope.