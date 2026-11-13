/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const getDifference = (word) => {
        let arr = [];

        for (let i = 0; i < word.length - 1; i++) {
            arr.push(
                word.charCodeAt(i + 1) - word.charCodeAt(i)
            );
        }

        return arr.join(",");
    };

    const first = getDifference(words[0]);
    const second = getDifference(words[1]);
    const third = getDifference(words[2]);

    let unique;

    if (first === second) {
        unique = first;
    } else if (first === third) {
        unique = first;
    } else {
        unique = second;
    }

    for (let word of words) {
        if (getDifference(word) !== unique) {
            return word;
        }
    }
}
    
