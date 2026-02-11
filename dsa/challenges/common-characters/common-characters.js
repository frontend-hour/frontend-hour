/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let first = words[0];
    let r = [];
    for(let i =  0; i < first.length; i++) {
        let flag = true;
        for(let j = 1; j < words.length; j++) {
            let idx = words[j].indexOf(first[i]);
            if(idx === -1) {
                flag = false;
            } else {
                let tmp = words[j].split('');
                tmp.splice(idx, 1);
                words[j] = tmp.join('');
            }
        }
        if(flag) {
            r.push(first[i]);
        }
    }
    return r;
};
