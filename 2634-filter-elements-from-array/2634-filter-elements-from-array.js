/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {   // Pass value and index
            result.push(arr[i]);
        }
    }

    return result;
}

const arr = [1, 2, 3];

function firstIndex(n, i) {
    return i === 0;
}

console.log(filter(arr, firstIndex));
