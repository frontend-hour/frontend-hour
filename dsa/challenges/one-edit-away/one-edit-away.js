function oneEditAway(str1, str2) {
    if ((str1.length > str2.length) && (str1.length - str2.length === 1)) {
        return checking(str1, str2);
    } else if ((str1.length < str2.length) && (str2.length - str1.length === 1)) {
        return checking(str2, str1);
    } else if (str1.length === str2.length) {
        let count = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                count += 1;
            }
        }
        return count <= 1;
    }
    return false;
}

function checking(largeStr, smallStr) {
    return largeStr.split('').sort().join().includes(smallStr.split('').sort().join());
}