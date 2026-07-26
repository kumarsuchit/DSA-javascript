// Q-1 check user is valid or not for vote using function
function checkValidVoter(age) {
    if (age >= 18) {
        console.log(`Your age is ${age} and you are eligible for vote...`);
    } else {
        console.log(`Your age is ${age} and you are not eligible for vote...`);
    }
}
checkValidVoter(18);
checkValidVoter(17)

// Q-2 check user is valid or not for vote using taking value from prompt

// let age = Number(prompt("Please enter you age to check you are valid voter or not....."));
let age = 12;
if (isNaN(age)) {
    console.log("Please enter age in number...")
} else if (age >= 18) {
    console.log(`Your age is ${age} and you are eligible for vote...`);
} else {
    console.log(`Your age is ${age} and you are not eligible for vote...`);
}

// Q-3 Shop discount, if you are shoping so much getting discount and final how much you have to pay
// price            discount
// 0-5000             0%
// 5001-7000          5%
// 7001-9000          10%
// above 9000         20%

function checkDiscountedAndFinalPayblePrice(shopingAmount) {
    let discountedAmount;
    if (shopingAmount <= 5000) {
        discountedAmount = 0;
    } else if (shopingAmount <= 7000) {
        discountedAmount = methodToCalcluteDiscount(shopingAmount, 5);
    } else if (shopingAmount <= 9000) {
        discountedAmount = methodToCalcluteDiscount(shopingAmount, 10);
    } else if (shopingAmount > 9000) {
        discountedAmount = methodToCalcluteDiscount(shopingAmount, 20);
    }

    console.log(`You get ${discountedAmount} rupee as discount and final payble amount is ${shopingAmount - discountedAmount}`)
}

function methodToCalcluteDiscount(price, percentage) {
    return (price * percentage) / 100;
}

checkDiscountedAndFinalPayblePrice(70000);


// Q-4 electric bill
// price            bill in %
// upto 100           4%
// 101-200            6%
// 201-400            8%
// above 400          13%

function calcluteElectricityBill(unit) {
    let billAmount = 0;
    if (unit > 400) {
        billAmount += (unit - 400) * 13;
        unit = 400;
    }
    if (unit > 200 && unit <= 400) {
        billAmount += (unit - 200) * 8;
        unit = 200;
    }
    if (unit > 100 && unit <= 200) {
        billAmount += (unit - 100) * 6;
        unit = 100;
    }
    if (unit <= 100) {
        billAmount += unit * 4;
    }
    console.log("your generated bill=>", billAmount);
}

calcluteElectricityBill(230)

// Q-5 calcluate tax, how much you have to baseed on new regime

// Up to ₹4,00,000: Nil (Basic exemption)
// ₹4,00,001 – ₹8,00,000: 5%
// ₹8,00,001 – ₹12,00,000: 10%
// ₹12,00,001 – ₹16,00,000: 15%
// ₹16,00,001 – ₹20,00,000: 20%
// ₹20,00,001 – ₹24,00,000: 25%
// Above ₹24,00,000: 30%
function calcluateTax() {

}

// Q-6 INR denomination = means will devide any amount in maximun notes to minimum notes

function InrDenomination(amount) {
    let obj = {}
    if (amount >= 500) {
        obj['500 notes'] = Math.floor(amount / 500);
        amount = amount % 500;
    }
    if (amount >= 200) {
        obj['200 notes'] = Math.floor(amount / 200);
        amount = amount % 200;
    }
    if (amount >= 100) {
        obj['100 notes'] = Math.floor(amount / 100);
        amount = amount % 100;
    }
    if (amount >= 50) {
        obj['50 notes'] = Math.floor(amount / 50);
        amount = amount % 50;
    }
    if (amount >= 20) {
        obj['20 notes'] = Math.floor(amount / 20);
        amount = amount % 20;
    }
    if (amount >= 10) {
        obj['10 notes'] = Math.floor(amount / 10);
        amount = amount % 10;
    }
    if (amount >= 5) {
        obj['5 notes'] = Math.floor(amount / 5);
        amount = amount % 5;
    }
    if (amount >= 2) {
        obj['2 notes'] = Math.floor(amount / 2);
        amount = amount % 5;
    }
    if (amount >= 1) {
        obj['1 notes'] = Math.floor(amount / 1);
    }

    console.table("Numbers of Notes=>", obj)
}

InrDenomination(1445)

// swith case

let day = 3;

switch (day) {
    case 1: console.log("Sunday");
        break
    case 2: console.log("Monday");
        break
    case 3: console.log("Tuesday");
        break
    case 4: console.log("Wednesday");
        break
    case 5: console.log("Thursday");
        break
    case 6: console.log("Friday");
        break
    case 7: console.log("Saturday");
    default: console.log("Invaid day")
}

switch (false) {
    case 12 > 11: console.log("Hey");
        break
    case 12 < 11: console.log("Hello");
        break
}


// Note: This happens because JavaScript uses the IEEE 754 double-precision floating-point format to represent numbers. Many decimal fractions cannot be represented exactly in binary.
let value = 0.1 + 0.2;
// let value = Number((0.1 + 0.2).toFixed(1)) // its fix of this 

switch (value) {
    case 0.5: console.log("this value should be=>", value);
        break
    case 0.3: console.log("this value should be=>", value);
        break

    default: console.log("No match value");
}