// input n=5
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 1; j <= i + 1; j++) {
        str = str + (str ? ' ' : '') + j;
    }
    console.log(str);
}

// Pattern 2
// input = 4

// 1
// 2 3
// 4 5 6
// 7 8 9 10

let count = 1;
for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str = str + (str ? ' ' : '') + count;
        count++;
    }
    console.log(str);
}
