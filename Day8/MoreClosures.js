//Two Benifits of closures

//1 Memory Efficient : 

function heavyDuty(index) {
    let arr1 = new Array(7000).fill('Yo');
    console.log('Heavy Duty Created')
    return arr1[index];
}


console.log(heavyDuty(754));
console.log(heavyDuty(755));
console.log(heavyDuty(756));

//In the above case the output will be
/*
Heavy Duty Created
Yo
Heavy Duty Created
Yo
Heavy Duty Created
Yo
*/

//the fact that heavy duty is logged 3 times means that the function will run 3 times. Which the array will be created 3 times which will increase the memory

function heavyDuty2() {
    const arr2 = new Array(7000).fill('no');

    console.log("Heavy Duty 2 created");

    return function (index) {
        return arr2[index]
    }
}

const duty = heavyDuty2();
console.log(duty(700));
console.log(duty(800));
console.log(duty(900));

/* This will return 
        Heavy Duty 2 created
        no
        no
        no

        Heavy Duty 2 is logged only once which means that the array is created only once which saves up memory.

*/


// 2 Data Encapsulation : Some Data should not be exposed

function makeNuclearBomb() {
    let countdown = 0;

    function passtime() {
        countdown++;
    }

    function detonate() {
        countdown = -1;
        return "Dead";
    }

    function totalPeaceTime() {
        return countdown;
    }

    setInterval(passtime, 1000);

    return {
        totalPeaceTime: totalPeaceTime,
    }
}

const makeBomb = makeNuclearBomb();

//with this we have the ability to give acces to some data and prevent access to some data.

