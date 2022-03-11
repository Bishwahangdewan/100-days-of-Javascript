//EXERCISE 1

let view;

function initialize() {
    console.log("only log once")
    view = "You";

    return function () {
        return view;
    }
}

const init = initialize();
init()
init()
init()


//EXERCISE 2
const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
    function closure(i) {
        setTimeout(function () {
            console.log('Im at index', i);
        }, 3000)
    };

    closure(i)
}







