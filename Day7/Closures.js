//Closures are basically function bounded by its outer variables

function outer() {
    let sam = "10";

    return function inner() {
        let Alex = "20";

        return `${sam} and ${Alex}`;
    }
}

console.log(outer()()); //prints 10 and  20

//In the above example once the function outer returns function inner it is removed from the call stack . And once the function is removed the variables in it should also be garbage collected but because of closures the varable variable sam does not get destroyed and the function inner remembers it.

