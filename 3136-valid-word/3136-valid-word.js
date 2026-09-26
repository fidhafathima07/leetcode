/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) {
        return false;
    }

    let vowel = false;
    let consonant = false;

    for (let ch of word) {
        if (!/[a-zA-Z0-9]/.test(ch)) {
            return false;
        }
        if (/[a-zA-Z]/.test(ch)) {
            let lower = ch.toLowerCase();

            if ("aeiou".includes(lower)) {
    vowel = true;
            } else {
                consonant = true;
            }
        }
    }

    return vowel && consonant;
};