/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
var cyclicShift = function(n, grid, rowShift, colShift) {
    

    for (let i = 0; i < n; i++) {
        let k = rowShift[i];

        grid[i] = grid[i].slice(k).concat(grid[i].slice(0, k));
    }

    for (let j = 0; j < n; j++) {
        let k = colShift[j];

        let column = [];

        for (let i = 0; i < n; i++) {
            column.push(grid[i][j]);
        }

        column = column.slice(k).concat(column.slice(0, k));

        for (let i = 0; i < n; i++) {
            grid[i][j] = column[i];
        }
    }

    return grid;

};