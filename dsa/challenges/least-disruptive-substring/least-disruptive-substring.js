let a = [1, 2, 3, 4, 5, 6, 7, 8];
let b = [3, 2, 3];

function leastDisruptivePath(a, b) {
    for(let k = 0; k < a.length; k ++) {
        let score = 0;
        for(let p = 0; p < b.length; p++) {
            score = score + Math.abs(b[p] - a[k + p]);
        }
    }
}

leastDisruptivePath(a, b);