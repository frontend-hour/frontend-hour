// Pattern 1
for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 1; j <= i + 1; j++) {
        str = str + (str ? ' ' : '') + j;
    }
    console.log(str);
}

// Pattern 2
let count = 1;
for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str = str + (str ? ' ' : '') + count;
        count++;
    }
    console.log(str);
}