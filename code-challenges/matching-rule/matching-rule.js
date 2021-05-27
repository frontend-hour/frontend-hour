var countMatches = function(items, ruleKey, ruleValue) {
    let index;
    let count = 0;
    if(ruleKey === 'type') {
        index = 0;
    } else if(ruleKey === 'color') {
        index = 1;
    } else if(ruleKey === 'name') {
        index = 2;
    }
    for(let i = 0; i < items.length; i++) {
        if(items[i][index] === ruleValue) {
            count += 1;
        }
    }
    
    return count;
};
