//Variables declared inside the block ie curly braces have block scope.Most Programming languages have block scope.However Javascript has Functional scope

function fscope() {
    var a = 5;

    if (a < 10) {
        var b = 10;
    }

    console.log(b);     //prints 10
}

fscope();

//in most other programming languages it would have returned an error. In Javascript if we declare a variable with var , it will by default have functional scope so when thae var b is declared , it will create sope in the nearest enclosing function i.e fscope and thats why it can be accessed outside of the if statement.

//To resolve this issue we declare variables with let or const. they have block scope and will create an owm environment inside the if statement.
