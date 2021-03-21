function vowelsInString(str) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i of str) {
        if (vowels.includes(i)) {
            count++;
        }
    }
    return count;
}