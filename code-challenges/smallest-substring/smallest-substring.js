function smallestSubstring(array, str) {
    let substring = '';
    let temp = [];
    let substringList = [];

    for (let i of str) {
        if (temp.length === array.length) {
            substringList.push(substring);
        }
        if (array.includes(i)) {
            if (temp.includes(i)) {
                substring = '';
                temp = [];
            }
            substring = substring + i;
            temp.push(i);
        } else {
            substring = substring ? substring + i : substring;
        }
    }
    console.log(substringList);
    return (temp.length === array.length) ? substring : 'Not a match in Given string';
}

console.log(smallestSubstring(['a', 'b', 'c'], "abyuxabyteqcaebczt"));