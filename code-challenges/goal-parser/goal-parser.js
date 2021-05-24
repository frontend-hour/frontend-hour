var interpret = function(command) {
    let res = '';
    for(let i = 0; i < command.length; i++) {
        if(command[i] === 'G') {
            res = res + 'G'
        } else if(command[i] === '(') {
            if(command[i + 1] === ')') {
                res = res + 'o';
                i += 1;
            } else {
                res = res + 'al';
                i += 3;
            }
        }
    }
    return res;
};
