/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  let letterMap = new Map();
  let wordMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let letter = pattern[i];
    let word = words[i];

    if (letterMap.has(letter) && letterMap.get(letter) !== word) {
      return false;
    }

    if (wordMap.has(word) && wordMap.get(word) !== letter) {
      return false;
    }

    letterMap.set(letter, word);
    wordMap.set(word, letter);
  }

  return true;
}

console.log(wordPattern("abba", "dog constructor constructor dog")); 