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
        arr[s] = null;
    }
    console.log("Count of unique elements=>", j);
    console.log("after removing duplicate elements=>", arr);
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

function removeDuplicateElementBruteForce(arr) {
    let checkValueMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!checkValueMap.has(arr[i])) {
            checkValueMap.set(arr[i]);
        }
    }
    console.log("Count of unique elements=>", checkValueMap.size);
    console.log("After removing duplicate elements=>", checkValueMap.keys());
}

removeDuplicateElementBruteForce([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("------------------------------------------------");

// Q-6 Merge to sorted array arr1=[1,3,5,7], arr2 = [2,4,6] output would be = [1,2,3,4,5,6,7]

function mergeTwoSortedArr(arr1, arr2) {
    let mergedArr = new Array(arr1.length + arr2.length);
    let i = 0;
    let j = 0;

    for (let k = 0; k < mergedArr.length; k++) {
        if (arr1[i] < arr2[j]) {
            mergedArr[k] = arr1[i];
            i++;
        } else {
            if (arr2[j] == undefined) {
                mergedArr[k] = arr1[i];
                i++;
            } else {
                mergedArr[k] = arr2[j];
                j++;
            }
        }
    }
    console.log("After merged sorted array=>", mergedArr);
}

mergeTwoSortedArr([1, 2, 4, 5, 7, 9], [3, 6, 8]);

function mergeTwoSortedArray(firstArr, secondArr) {
    let mergedArr = new Array(firstArr.length + secondArr.length);
    let i = j = k = 0;

    while (i < firstArr.length && j < secondArr.length) {
        if (firstArr[i] < secondArr[j]) {
            mergedArr[k++] = firstArr[i++];
        } else {
            mergedArr[k++] = secondArr[j++];
        }
    }

    while (i < firstArr.length) {
        mergedArr[k++] = firstArr[i++];
    }

    while (j < secondArr.length) {
        mergedArr[k++] = secondArr[j++];
    }
    console.log("After merged sorted array => ", mergedArr);

}
mergeTwoSortedArray([1, 3, 4, 5, 8, 14, 15, 18], [2, 6, 7, 9]);
console.log("------------------------------------------------");


// Q-7 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
function mergeSortedArray(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            k--;
            i--;
        } else {
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }
    console.log("Merge sorted array=>", nums1);
}

mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// Q-8 Best time to Buy and Sell Stock
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function getMaxProfit(arr) {
    let maxProfit = 0;
    let buyStockPrice = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < buyStockPrice) {
            buyStockPrice = arr[i];
        }

        let profit = arr[i] - buyStockPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
}

console.log("Max profit to buy and sell stock=>", getMaxProfit([7, 1, 5, 3, 6, 4]));
console.log("Max profit to buy and sell stock=>", getMaxProfit([7, 6, 4, 3, 1]));
console.log("Max profit to buy and sell stock=>", getMaxProfit([3, 3, 5, 0, 0, 3, 1, 4]));