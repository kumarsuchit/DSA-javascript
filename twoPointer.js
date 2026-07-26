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
// TIHCUS

console.log("Resvers string of SUCHIT =>", reverseStr('SUCHIT'))
