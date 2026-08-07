// Q-1 Left rotation one time an array's elements

let rotateLeftOneTime = function (arr = []) {
    let firstVal = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = firstVal;
    return arr;
}

console.log("Left one time rotate=>", rotateLeftOneTime([1, 2, 3, 4, 5, 6]));

// Q-2 Right rotate one time(k=1) an array's elements

let rightRotateOneTime = function (arr) {
    let lastVal = arr[arr.length - 1];

    for (let i = arr.length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastVal;

    return arr;
}

console.log("Right one time rotate=>", rightRotateOneTime([1, 2, 3, 4, 5, 6]));
console.log("------------------------------------------------");

// Q-3 Left Rotate an array by k=3 positions broot force

let leftRotateKPosition = function (arr, k) {
    let K = k % arr.length;

    for (let j = 1; j <= K; j++) {
        let firstVal = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = firstVal;

    }
    return arr;
}
console.log("Left rotate k=3 time=>", leftRotateKPosition([1, 2, 3, 4, 5, 6, 7], 3));

let rightRotateKPosition = function (arr, k) {
    k = k % arr.length;
    for (let j = 1; j <= k; j++) {
        let lastValue = arr[arr.length - 1];
        for (let i = arr.length - 1; i >= 1; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = lastValue;
    }
    return arr;
}

console.log("Right rotate k=3 time=>", rightRotateKPosition([1, 2, 3, 4, 5, 6, 7], 3));
console.log("------------------------------------------------");


// Q-4 Rotate an array by k=3 positions optimize solution
// Remember:
// Left Rotate by K
//     Reverse first k
//     Reverse remaining
//     Reverse whole array
// Right Rotate by K
//     Reverse whole array
//     Reverse first k
//     Reverse remaining

function reverseElement(arr, start, end) {

    while (start < end) {
        // [arr[start], arr[end]] = [arr[end], arr[start]];
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateKtimes(arr, k, direction) {
    let n = arr.length;
    let K = k % n;
    if (K === 0) return arr;

    if (direction == 'left') {
        reverseElement(arr, 0, K - 1);
        reverseElement(arr, K, n - 1);
        reverseElement(arr, 0, n - 1);
    } else if (direction == 'right') {
        reverseElement(arr, 0, n - 1);
        reverseElement(arr, 0, K - 1);
        reverseElement(arr, K, n - 1);
    }

    return arr;
}

console.log("After Left rotation value=>", rotateKtimes([1, 2, 3, 4, 5], 2, "left"));
console.log("After Right rotation value=>", rotateKtimes([1, 2, 3, 4, 5], 2, "right"));
console.log("------------------------------------------------");

// Q-5 Remove Duplicates from Sorted Array (leetcode 26)
// Output: 5(number of unique elements), nums = [0,1,2,3,4,_,_,_,_,_]
function removeDuplicates(arr = []) {
    let i = 0;
    let j = 1;
    while (i < arr.length - 1) {
        if (arr[i] !== arr[i + 1]) {
            arr[j] = arr[i + 1];
            i++;
            j++;
        } else {
            i++;
        }
    }

    for (let s = j; s < arr.length; s++) {
        arr[s] = "_";
    }
    console.log("Count of unique elements=>", j);
    console.log("after removing duplicate elements=>", arr);
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
