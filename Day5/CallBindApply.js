// Call Bind and Apply invokes the function. call and apply is used when we ewant to copy a method to another object.The only difference is apply takes array as arguments.

var person = {
    name: "Bissi",
    sayName: function () {
        console.log(this.name);
    }
}

var person2 = {
    name: "Steve",
}

person.sayName.call(person2);

