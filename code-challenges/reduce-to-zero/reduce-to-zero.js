var numberOfSteps = function(num) {
    let count = 0;
    
    while(num) {
        count += 1;
        
        if(num %2 === 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
    }
    return count;
};
