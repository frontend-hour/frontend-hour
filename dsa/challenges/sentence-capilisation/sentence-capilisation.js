//approach1
function sentenceCap(str) {
    let words = [];
    let wordsInStr = str.split(' ');
    for (let word of wordsInStr) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ');
}

//approach2
function capSentence(str) {
    let words = [];
    let wordsInStr = str.split(' ');
    for (let word of wordsInStr) {
        let [first, ...rest] = word.split('');
        words.push((first.toUpperCase() + rest.join('')))
    }
    return words.join(' ');
}


//approach3
function capSentence(str) {
    let words = '';
    let wordsInStr = str.split(' ');
    for (let word of wordsInStr) {
        let [first, ...rest] = word.split('')
        words = (words ? words + ' ' : '') + (first.toUpperCase() + rest.join(''))
    }
    return words;
}