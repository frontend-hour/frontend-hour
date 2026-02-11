function wordReversal(str) {
    let words = [];
    let wordsInStr = str.split(' ');
    for (let word of wordsInStr) {
        words.push(word.split('').reverse().join(''))
    }
    return words.join(' ');
}