
//Q-1 get largest and smallest number(element) form an array

function getLargestNumber(arr) {
    if (arr.length < 1) return null;

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Largest number: ", getLargestNumber([17, 3, 9, 2, 11, 15, 7, 19, 6]))
console.log("Largest number: ", getLargestNumber([11, 15, 7, 13, 6]))

console.log("------------------------------------------------");

//Q-2 get largest and smallest number(element) form an array
function getSmallestNumber(arr) {
    if (arr.length < 1) return null;

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log("Smallest number: ", getSmallestNumber([11, 15, 7, 13, 6]))

console.log("------------------------------------------------");


// Q-3 Find the secondMax largest element in an array

let secondLargestElement = function (arr) {
    if (arr.length < 2) return null;
    let max = -Infinity;
    let secondMax = -Infinity;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    return secondMax === -Infinity ? null : secondMax;
}
console.log("Get secondMax largest element=>", secondLargestElement([12, 35, 1, 10, 34, 1])); //  34
console.log("Get secondMax largest element=>", secondLargestElement([10, 10, 10])); // null
console.log("Get secondMax largest element=>", secondLargestElement([10])); // null
console.log("------------------------------------------------");

// Q-4 Find the secondMin(Second smallest) smallest element in an array

let secondSmallestNumber = function (arr) {
    if (arr.length < 2) return null;

    let min = Infinity;
    let secondMin = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] < secondMin && arr[i] !== min) {
            secondMin = arr[i];
        }
    }
    return secondMin === Infinity ? null : secondMin;
}

console.log("get second smallest number=>", secondSmallestNumber([3, 12, 45, 4, 22, 34, 2, 28, 1]));
console.log("------------------------------------------------");

// Q-5 Reverse an Array elements

let reverseElements = function (arr) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;
    while (firstIndex < lastIndex) {
        // ***** taking temp variable
        let temp = arr[lastIndex];
        arr[lastIndex] = arr[firstIndex];
        arr[firstIndex] = temp;
        firstIndex++;
        lastIndex--;

        // **** using destrcturing
        // [arr[lastIndex], arr[firstIndex]] = [arr[firstIndex], arr[lastIndex]];
        // firstIndex++;
        // lastIndex--;
    }
    console.log("This is reversed values=>", arr);
}
reverseElements([1, 2, 3, 4, 5]);

// Q-6 Reverse an Array elements using taking new space(Variable/temp)

let reverseElementsUsingExtraSpace = function (arr = []) {
    if (!arr.length) return null;
    let tempArr = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
        tempArr[(arr.length - 1) - i] = arr[i];
    }
    return tempArr;
}
console.log("Reversed array using temp variable=>", reverseElementsUsingExtraSpace([1, 5, 8, 3, 9]));
console.log("------------------------------------------------");

// Q-7  Move all zeros to the end without changing order of other elements

let moveZerosToTheEnd = function (arr) {
    let i = 0;
    let j = 0;
    while (i < arr.length) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j++;
        } else {
            i++;
        }
    }
    return arr;
}
console.log("Move all zeros at end=>", moveZerosToTheEnd([0, 0, 5, 2, 0, 3, 1, 0, 0, 5]));


let moveZeroAtStarting = function (arr) {
    // let left = arr.length - 1;

    // for (let right = arr.length - 1; right >= 0; right--) {
    //     if (arr[right] !== 0) {
    //         [arr[left], arr[right]] = [arr[right], arr[left]];
    //         left--;  
    //     }
    // }

    // return arr;

    let i = arr.length - 1;
    let j = arr.length - 1;

    while (i >= 0) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i--;
            j--;
        } else {
            i--;
        }
    }
    return arr;
}

console.log("Move all zeros at starting=>", moveZeroAtStarting([2, 0, 3, 1, 0, 0, 5]));