// Q-1 Square Patter
// * * * *
// * * * *
// * * * *
// * * * *

function squarePattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
squarePattern(4);
console.log("----------------------------------------------------")
// Q-2 Left Triangle
// *
// * *
// * * *
// * * * *
// * * * * *

function leftTrianglePattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
leftTrianglePattern(5)
console.log("----------------------------------------------------")

// Q-3 Inverted Triangle Pattern
// * * * * *
// * * * *
// * * *
// * *
// *

function invertedTringlePattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = i; j <= n; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

invertedTringlePattern(5)
console.log("----------------------------------------------------")

// Q-4 Payramod pattern
//     *
//    ***
//   *****
//  *******
// *********

function pyramidPattern(n) {
    for (let i = 1; i <= n; i += 2) {
        let row = "";

        // its use for add space in left side
        for (let s = 1; s <= ((n - i) / 2); s++) {
            row += " ";
        }

        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
pyramidPattern(9);
console.log("----------------------------------------------------")

// Q-5 Inverted pyaramid
// *********
//  *******
//   *****
//    ***
//     *

function invertedPyramin(n) {
    for (let i = n; i >= 1; i -= 2) {
        let row = "";
        // its use for add space in left side
        for (let s = 1; s <= (n - i) / 2; s++) {
            row += " ";
        }
        for (let j = 1; j <= i; j++) {
            row += "*"
        }
        console.log(row);
    }
}
invertedPyramin(9);
console.log("----------------------------------------------------")

// Q-6 Number triangle
// 1
// 12
// 123
// 1234
// 12345
function numberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);
    }
}
numberTriangle(5);
console.log("----------------------------------------------------")

// Q-7 Alphabet triangle
// A
// A B
// A B C
// A B C D
// A B C D E
function alphabetTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        let ascii = 65;
        for (let j = 1; j <= i; j++) {
            row += String.fromCharCode(ascii) + " ";
            ascii++;
        }
        console.log(row);
    }
}
alphabetTriangle(5)
console.log("----------------------------------------------------");

// Q-8 Mirror triangle
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

function mirrorTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        // its use for add space from left side
        for (let s = 1; s <= (n - i); s++) {
            row += " ".repeat(2); // its use to add two space
        }

        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row)
    }
}
mirrorTriangle(5);
console.log("----------------------------------------------------")

// Q-9 create X pattern
// *   *
//  * * 
//   *  
//  * * 
// *   *
let xPattern = function (n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= n; j++) {
            if (i === j) {
                row += "*";
            } else if (i + j === n + 1) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row)
    }

}

xPattern(5)
console.log("----------------------------------------------------")

// Q-10 V pattern
// *       *
//  *     * 
//   *   *  
//    * *   
//     *   
let VPattern = function (n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= ((2 * n) - 1); j++) {
            if (i === j) {
                row += "*";
            } else if (i + j === 2 * n) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row)
    }
}

VPattern(5)
console.log("----------------------------------------------------")

// Q - 11 Diamond Pattern
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     * 

let diamondPattern = function (n) {
    // upper pattern
    for (let i = 1; i <= n; i++) {
        let row = "";
        // add space from left side
        for (let s = 1; s <= n - i; s++) {
            row += " ";
        }
        for (let j = 1; j <= (2 * i) - 1; j++) {
            row += "*";
        }
        console.log(row)
    }
    // lower pattern
    for (let i = 1; i <= n - 1; i++) {
        let row = "";
        // add space from left side
        for (let s = 1; s <= i; s++) {
            row += " ";
        }
        for (let j = (2 * n - 1) - (2 * i); j >= 1; j--) {
            row += "*";
        }
        console.log(row)
    }
}
diamondPattern(5);
console.log("----------------------------------------------------")

// Q-12 Hollow Square Pattern
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

let hollwSquirePattern = function (n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n) {
                row += "* ";
            } else {
                row += " ".repeat(2);
            }
        }

        console.log(row)
    }
}
hollwSquirePattern(5)
console.log("----------------------------------------------------")

// Q-13 Floyd's Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10
let floydTriangle = function (n) {
    let count = 1;
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += count + " ";
            count++;
        }
        console.log(row)
    }
}
floydTriangle(4);