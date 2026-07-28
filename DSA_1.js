// Q-1=> Sum of two numbers
let a = 10;
let b = 20;
console.log(a + b); // output will be 30

console.log("10" + "1"); // output will be 101, because its consider + symbol to concante the value not for addition

console.log(12 + "13"); // output will be 1213, because its consider + symbol to concante the value not for addition

console.log("20" + 13); // output will be 2013, because its consider + symbol to concante the value not for addition

// Q-2=> Sum and message

let a1 = 10;
let b1 = 20;
console.log("Sum of 10 and 20 is => " + a1 + b1); // output will be 1020 because its concanting because first later is string
console.log("Sum of 10 and 20 is => " + (a1 + b1)); // output will be 30 because its solve first brackets value then concanate with string
console.log(a1 + b1 + " is Sum of 10 and 20"); // output will be 30 because its adding first both numbers then concanting with string

// type coercion => + operator use for additon and concatation, but other operator have only one work so its convert string in number and preform operations
console.log("Type coercion=>", 4 - "1"); //3 as number
console.log("Type coercion=>", "3" - 1); //2 as number
console.log("Type coercion=>", "3" * 1); // 3 as number
console.log("Type coercion=>", "3" / 2); //1.5 as number


// take value from user and print the value
// let inputValue = prompt("Please enter value here...");
// console.log("Input value from prompt=>", inputValue);

// let age = prompt("Please Enter your age...");
// here we are converting value in number
// let ageInNumber = Number(age);
// Note: any type of conversion is called Type Casting
// console.log("Age=>", age, ageInNumber);

// Q-3 => Swap two variable via three method
// method 1
let A = 10;
let B = 20;
let tempVar = A; // tempVar= 10 and A =10
A = B; // A = 20 and B =20
B = tempVar; // B=10
console.log("A=>", A, "B=>", B);

// Method 2
let x = 10;
let y = 20;
x = x + y; // x=30 and y=20
y = x - y; // x=30 and y=10
x = x - y; // x =20
console.log("Swap method 2=>", x, y);

// Method 3=> using Destructuring

let X = 30;
let Y = 10;
[X, Y] = [Y, X];

console.log("swap 3rd method=>", X, Y);

// Q-4=> Make a function to check year is leap year or not

function checkLeapYear(year) {
    if (year % 4 == 0) {
        console.log(`Year ${year} is leap year`);
    } else {
        console.log(`Year ${year} is not leap year`);
    }

}
checkLeapYear(2024)

// Q-4 Check strict and not strict equal 
console.log("Is non-strict equal=>", 10 == '10');
console.log("Is strict equal=>", 10 === '10');

console.log("Is not non-strict equal=>", 10 != '10');
console.log("Is not strict equal=>", 10 !== 10);

// Q-5 Pre increment and Post increment && pre decrement post decrement

let ab = 10;
let bc = ab++;
console.log("Post increment=>", ab, bc); // ab=11, bc=10 because firstlt ab value assign in bc variable then increment the ab value 

let cd = 10;
let ef = ++cd;
console.log("Pre increment=>", cd, ef); // cd=11, ef=11 because firstlt cd value incremente then assign in ef variable 

let ab1 = 10;
let bc1 = ab1--;
console.log("Post decrement=>", ab1, bc1) //ab1=9 bc1=10

let cd1 = 10;
let ef1 = --cd1;
console.log("Pre decrement=>", cd1, ef1); // cd1=9 and ef1=9

let i = 11;
i = i++ + ++i; // i = 11+13
console.log("i value=>", i)// 24

let j = 11, k = 22;
let l = j + k + j++ + k++ + ++j + ++k

console.log("j=", j); // 13
console.log("k=", k); //24
console.log("l=", l); // 103

// Q-6 Math all methods
console.log("Math round, if value is less the 5 after decimal will round lower else in greater=>", Math.round(9.4), Math.round(9.5)); // 9 and 10
console.log("Math ceil, its always increase value afer decimal=>", Math.ceil(9.1)); // 10
console.log("Math floor, its always decrease the value and make in round formate=>", Math.floor(9.8));  //9;
console.log("Math trunc, its remove all the value after decimal=>", Math.trunc(88.99)) // 88;
console.log("Math pow, its make powar of any value=>", Math.pow(2, 4)) // 16
console.log("Math sqrt, its use for make quire any value=>", Math.sqrt(36)) // 6;
console.log("Math abs, its use to make positive value if have any negative=>", Math.abs(-12)); //12
console.log("Math max, its use to filter maximum value=>", Math.max(34, 12, 22, 47));//48
console.log("Math min, its use to filter minimun value =>", Math.min(34, 12, 22, 47));//12
console.log("Math random, its create random number in bewtween 0 to 1=>", Math.random());

// Q-7 Create 6 digit rendon otp
let otp = Math.floor(Math.random() * 999999 + 100000);
console.log("otp=>", otp);

// how to combile both array without using inbuild methods
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

function combineArr(arrVal1, arrVal2) {
    let resultArr = [];
    let index = 0;
    for (let i = 0; i < arrVal1.length; i++) {
        resultArr[index] = arrVal1[i];
        index++;
    }
    for (let j = 0; j < arrVal2.length; j++) {
        resultArr[index] = arrVal2[j];
        index++;
    }
    console.log("arr=>", resultArr)
}

combineArr(arr1, arr2)