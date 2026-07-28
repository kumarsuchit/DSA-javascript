// check this string is palindrom or not
// Palindrom are those sentence which are same is we revers the string example: madam/racecar/level/noon/radar

function isPalindromOrNot(str) {
    let firstIndex = 0;
    let lastIndex = str.length - 1;

    while (firstIndex <= lastIndex) {
        if (str[firstIndex] === str[lastIndex]) {
            firstIndex++;
            lastIndex--;
        } else {
            return false
        }
        return true;
    }
}

console.log("Is madam is palindrom=>", isPalindromOrNot("madam"));
console.log("Is racecar is palindrom=>", isPalindromOrNot("racecar"));

// reverse string
function reverseStr(str) {
    let firstIndex = 0;
    let lastIndex = str.length - 1;
    let arr = str.split('');

    while (firstIndex < lastIndex) {
        let temp = arr[firstIndex];
        arr[firstIndex] = arr[lastIndex];
        arr[lastIndex] = temp;
        firstIndex++;
        lastIndex--;
    }
    return arr.join('')
    console.log("str=>", arr)
}

console.log("Resvers string of SUCHIT =>", reverseStr('SUCHIT'));


// Q- We have a sorted array and find index of two sum with will equal to 34(target value)

let targetValue = 34;
let arrVal = [2, 7, 11, 15, 23, 40];

function findexIndexOfTwoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sumOfIndex = arr[left] + arr[right];
        console.log("get index=>", left, right)
        if (sumOfIndex === target) {
            return [left, right];
        }

        if (sumOfIndex < target) {
            left++;
        } else if (sumOfIndex > target) {
            right--;
        }
    }
    return [-1, -1] // no pair found
}

console.log("find index of two sum", findexIndexOfTwoSum(arrVal, targetValue));

// Q- Two  sum if array is not shorted, using has map.. need to understand

function twoSum(arr, target) {
    const map = new Map();
    // console.log("map=>", map.entries())
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        // console.log("compenet=>", complement)
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(arr[i], i);
        // console.log("new map=>", map)
    }

    return null;
}

let res = twoSum([11, 4, 5, 78, 3, 12, 21], 25);
console.log("res=>", res);

// Q- Move zero in end------------------------------------------------------------

let arr = [2, 0, 4, 1, 0, 8];
// output = [2,4,1,8,0,0];

function moveZero(arr) {
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
    }
    console.log("Moved zero in right=>", arr);

}

moveZero(arr);