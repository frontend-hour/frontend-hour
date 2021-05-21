/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let row1 = 'qwertyuiop';
    let row2 = 'asdfghjkl';
    let row3 = 'zxcvbnm';
    let result = [];
    
    for(let i = 0; i < words.length; i++) {
        let count = 1;
        let row = '';
        if(row1.includes(words[i][0].toLowerCase())) {
            row = row1;
        } else if(row2.includes(words[i][0].toLowerCase())) {
            row = row2;
        } else if(row3.includes(words[i][0].toLowerCase())) {
            row = row3;
        }
        for(let j = 1; j < words[i].length; j++) {
            if(row.includes(words[i][j].toLowerCase())) {
                count+=1;
            }
        }
        if(count === words[i].length) {
            result.push(words[i]);
        }
    }
    return result;
    
};
