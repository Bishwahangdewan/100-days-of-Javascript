//HigherOrder Functions are Functions that accepts another function as an argument and also returns a functions;

function multiplyNumber(num1) {
    return function multiply2(num2) {
        return num1 * num2;
    }
}

function multiply(prop, multiplyNumber) { //function accepting a function as an argument
    const multiplyBy = multiplyNumber(prop.multiplicand)

    return multiplyBy(prop.multiplier) //function returning a function

}

console.log(multiply({ multiplicand: 20, multiplier: 3 }, multiplyNumber))

//Higher order function prevents DRY Code by givinf a generic code that works on most conditions.