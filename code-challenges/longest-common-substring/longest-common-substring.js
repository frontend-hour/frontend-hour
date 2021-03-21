function longestCommonSubstring(str1, str2) {
    let longestStr = '';
    let longestStrArr = [];
    let str;
    let k = 1;
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                str = str1[i];
                k = 1;
                while ((i + k < str1.length) && (j + k < str2.length) && (str1[i + k] === str2[j + k])) {
                    str += str1[i + k];
                    ++k;
                }
                if (longestStr.length === 0 || (str.length > longestStr.length)) {
                    longestStr = str;
                }
            }
        }
    }
    return longestStr;
}

let substr = longestCommonSubstring('XYPXYXYZK', 'XYZKYXYP');
console.log(substr);