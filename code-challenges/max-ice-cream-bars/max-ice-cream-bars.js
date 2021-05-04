var maxIceCream = function(costs, coins) {
    let remaining  = coins;
    let count = 0;
    costs.sort((a, b) => a - b);
    for(let i = 0 ; i < costs.length; i++) {
        if(costs[i] <= remaining) {
            count += 1;
            remaining = remaining - costs[i];
        }
    }
    return count;
};
