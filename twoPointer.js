// check this string is palindrom or not
// Palindrom are those sentence which are same is we revers the string example: madam/racecar/level/noon/radar

function isPalindromOrNot(str) {
    let index = 0;
    let lastIndex = str.length - 1;

    while (index <= lastIndex) {
        if (str[index] === str[lastIndex]) {
            index++;
            lastIndex--;
        } else {
            return false
        }
        return true;
    }
}

console.log("Is madam is palindrom=>", isPalindromOrNot("madam"));
console.log("Is racecar is palindrom=>", isPalindromOrNot("racecar"));