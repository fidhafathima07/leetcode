/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let maxHeap = gifts.sort((a, b) => b - a);

    while (k > 0) {
        let max = maxHeap.shift();

        let remaining = Math.floor(Math.sqrt(max));

        maxHeap.push(remaining);

        maxHeap.sort((a, b) => b - a);

        k--;
    }

    return maxHeap.reduce((sum, gift) => sum + gift, 0);

    
};