function reverseStringBF(str: string) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.at(i);
    }
    return reversedStr;
}

console.log("reversed string using broute force=>", reverseStringBF("abcdef"));

function checkPalindromBF(str: string) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.at(i);
    }
    if (reversedStr.toLowerCase() === str.toLowerCase()) return true;
    else return false;
}

console.log("This string is palindrom ? => ", checkPalindromBF('raceCar'));