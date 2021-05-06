var balancedStringSplit = function(s) {
    let count = 0;
    let exist = [];
    for(let i = s.length; i >= 0; i--) {
        let str = s.slice(0, i);

        if(str && checkEqual(str) && !exist.includes(str)) {
            count+=1;
            exist.push(str)
        }
    }
    return count;
};

function checkEqual(s) {
    let R = 0;
    let L = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'R') {
            R +=1;
        } else if(s[i] === 'L') {
            L+=1;
        }
    }
    return R === L;
}
