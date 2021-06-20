/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let temp = {};
    
    for(let i = 0; i < s.length; i++) {
        if(temp.hasOwnProperty(s[i])) {
            temp[s[i]] += 1;
        } else {
            temp[s[i]] = 1;
        }
    }
    
    let sortable = [];
    
    Object.keys(temp).forEach((key) => {
        sortable.push({ value : temp[key], key : key });
    });  
    sortable.sort((a, b) => b.value - a.value );
    
    
    let result = '';
    
    for(let j = 0; j < sortable.length; j++) {
        for(let k = 0; k < sortable[j].value; k++) {
            result += sortable[j].key;
        }
    }
 
    return result;
};
