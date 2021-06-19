/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    let turn = false;
    let game = true;
    let x = 0;
    
    while(game) {
        let foundX = false;
        for(let i = x; i < n; i++) {
            if(n % i === 0) {
                foundX = true;
                x = i;
                turn = !turn;
                break;
            }
        }
        n = n - x;
        game = foundX;
    }
    return turn;
};
