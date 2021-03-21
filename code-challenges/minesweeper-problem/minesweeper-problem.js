function printNeighbourCordinates(x, y, array) {
    for (let n = x - 1; n <= x + 1; n++) {
        for (let m = y - 1; m <= y + 1; m++) {
            if (n >= 0 && m >= 0 && array[n][m] !== -1) {
                array[n][m] = array[n][m] + 1;
            }
        }
    }
}

function buildMine(bombs, rows, columns) {
    let feild = [];
    for (let h = 0; h < columns; h++) {
        feild.push([]);
        for (let u = 0; u < rows; u++) {
            feild[h].push(0);
        }
    }
    bombs.forEach(element => {
        feild[element[0]][element[1]] = -1;
    });
    bombs.forEach(element => {
        printNeighbourCordinates(element[0], element[1], feild);
    });
    console.log(feild);
}
buildMine([[0, 0], [0, 1]], 5, 5);