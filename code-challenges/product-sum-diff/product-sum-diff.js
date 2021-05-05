var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    let s = String(n);
    for(let i = 0; i < s.length; i++) {
        sum = sum + Number(s[i]);
        product = product * Number(s[i]);
    }
    
    return product - sum;
};
