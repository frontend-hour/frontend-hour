 var isValid = function(s) {
    if(!s || !s.length || typeof s !== 'string') {
        return false;
    }
    let openParanthesis = '(';
    let closeParanthesis = ')';
    let openCurly = '{';
    let closedCurly = '}';
    let openSqaure = '[';
    let closeSquare = ']';
    let parenthesis = 0;
    let square = 0;
    let curly = 0;
    let braceTrack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === openParanthesis) { 
            parenthesis ++;
            braceTrack.push(closeParanthesis);
        } else if(s[i] === openCurly) {
            curly ++;
            braceTrack.push(closedCurly);
        } else if(s[i] === openSqaure) {
            square ++;
            braceTrack.push(closeSquare);
        } else if(s[i] === closeParanthesis) {
            let current = braceTrack.pop();
            if(current !== s[i]) {
                return false;
            }
            parenthesis--;
        } else if(s[i] === closedCurly) {
            let current = braceTrack.pop();
            if(current !== s[i]) {
                return false;
            }
            curly--;
        } else if(s[i] === closeSquare) {
            let current = braceTrack.pop();
            if(current !== s[i]) {
                return false;
            }
            square--;
        }
        
    }
    if(parenthesis || curly || square) {
        return false;
    }
    return true;
};