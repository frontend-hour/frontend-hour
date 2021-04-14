
var lengthOfLastWord = function (str) {
    var sArr = str.trim().split(' ');
    if (sArr.length === 0) {
        return 0;
    } else {
        return sArr[sArr.length - 1].length;
    }
};