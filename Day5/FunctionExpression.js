//if we create a function in any way other than its ddeclaration then its a function expression

const exp = function () {
    console.log("Exp")
}

exp(); //logs exp


const exp2 = function exp_fn2() {
    console.log("Exp")
}

//The above will throw an err saying exp_fn2 is not defined .Because in a function expression the function name is not added to the scope.

function def() {
    console.log("def")
}

//also Hoisting does not happen in function expressions. If these functions are called before its declaration then it will throw an err.


(function () {
    console.log("Super")  //logs super
})()