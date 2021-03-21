// Brute Force Search

function searchPatternInString(str, pattern) {
    for (let i = 0; i < (str.length - pattern.length) + 1; i++) {
        if (pattern[0] === str[i]) {
            let patternExist = true;
            for (let j = 1; j < pattern.length; j++) {
                if (pattern[j] !== str[i + j]) {
                    patternExist = false;
                    break;
                }
            }
            if (patternExist) {
                return i;
            }
        }
    }
    return -1;
}


// Solution 2

function stringSearch(str, pattern) {
    return str.indexOf(pattern);
}