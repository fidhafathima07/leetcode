/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
        let clockwise = 0;
    let total = 0;

    for (let d of distance) {
        total += d;
    }

    if (start > destination) {
        [start, destination] = [destination, start];
    }

    for (let i = start; i < destination; i++) {
        clockwise += distance[i];
    }

    // Other direction
    let counterClockwise = total - clockwise;

    return Math.min(clockwise, counterClockwise);

};