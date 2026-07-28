// Q-1 create table
function createTable(tableOfVal) {
    console.log("Table of ", tableOfVal);
    for (let i = 1; i <= 10; i++) {
        console.log(`${tableOfVal} * ${i} = ${tableOfVal * i}`)
    }
}
createTable(12);

// Q-2 create table in revers formate
function createTableReverse(tableOfVal) {
    console.log("Table of", tableOfVal, "in reverse mode")
    for (let i = 10; i >= 1; i--) {
        console.log(`${tableOfVal} * ${i} = ${tableOfVal * i}`)
    }
}
createTableReverse(13);

// Q-3 Sum of n Natural numbres( Exp = 1+2+3+4+5+6+7+.......)
function sumOfNNaturalNumbers(tillWhere) {
    let sumOfNumbers = 0;
    for (let i = 1; i <= tillWhere; i++) {
        sumOfNumbers += i;
    }
    console.log(`Sum of numbers till ${tillWhere} is=${sumOfNumbers}`);
}
sumOfNNaturalNumbers(5);

// Q-4, make a factorial of any number
function makeFactorialNumber(factOf) {
    if (factOf && factOf > 0) {
        let factorialVal = 1;
        for (let i = factOf; i > 1; i--) {
            factorialVal *= i;
        }
        console.log(`Factorial of ${factOf} =`, factorialVal);
    } else {
        console.log(`Generate to factorial, number should be always in +ve and grater then 0, here your number is`, factOf);
    }

}
makeFactorialNumber(5);

// Q-5 factors of numbers, suppose you have 12 a numbe so it will devide with 1, 2, 3, 4, 6, 12

function getFactorsOfNumber(number) {
    // for (let i = 1; i <= number; i++) {
    //     if (number % i === 0) {
    //         console.log(`${number} will be devide by`, i);
    //     }
    // }

    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            console.log(`${number} will be devide by`, i);
        }
    }
    console.log(`${number} will be devide by`, number);
}
getFactorsOfNumber(9);

// Q-5 check prime number, those number whose devided by 1 and it self, like 17 its devide by 1 and 17 similar 7 its devide by 1 and 7.

function isPrimeNumber(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i <= Math.floor(Math.sqrt(number)); i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

let numberVal = 37;
console.log(isPrimeNumber(numberVal) ? `${numberVal} is prime number` : `${numberVal} is Not prime number`);

// Q-6 break and Continue in javascript

// break => its use to stop occurence for example you are running a loop till 10 and checking if its comes at 5 break, means after 5, loop will not run, its run till 1,2,3,4
// continue => its use to skip the occurence for example you are running a loop till 10 and checking if its comes 5 add continue, means its skip 5 and show next value

for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    else console.log("how use break=>", i); // 1,2,3,4
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    else console.log("how use continue=>", i); // 1,2,3,4,6,7,8,9,10
}

//Q-7 revers number

function reverseNumber(number) {
    let reverseVal = 0;
    while (number > 0) {
        let reminder = number % 10;
        reverseVal = reverseVal * 10 + reminder;
        number = Math.floor(number / 10);
    }
    return reverseVal;

}
let numberForReverse = 12345678;
console.log(`Reverse of ${numberForReverse} is =>`, reverseNumber(numberForReverse));
;