/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    
    for(let m = 0; m < grid.length; m++) {
        for(let n = 0; n < grid[m].length; n++) {
            if(grid[m][n] < 0) {
                count += 1;
            }
        }
    }
    
    return count;
};
