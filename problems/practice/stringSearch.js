// Question -- Given a text, and a pattern, find whether the given pattern exists in the text or not

/*

input: text: helloworld, substring: hello
output: 0 (index of 'h', where the substring starts)

input: text: helloworld, substring: hop
output: -1

input: text: abcrxyzgf, substring: xyz
output: 4

*/

// Brute Force Search

function searchPatternInString(str, pattern) {
    for(let i = 0; i < (str.length - pattern.length) + 1; i++) {
        if(pattern[0] === str[i]) {
            let patternExist = true;
            for(let j = 1; j < pattern.length; j++) {
                if(pattern[j] !== str[i + j]) {
                    patternExist = false;
                    break;
                }
            }
            if(patternExist) {
                return i;
            }
        }
    }
    return - 1;
}