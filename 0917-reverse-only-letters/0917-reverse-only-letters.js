/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let letters = [];
    for (let ch of s) {
        if (/[a-zA-Z]/.test(ch)) {
            letters.push(ch);
        }
    }
     let result = "";
 for (let ch of s) {
        if (/[a-zA-Z]/.test(ch)) {
            result += letters.pop();
        } else {
            result += ch;
        }
    }

    return result;
}