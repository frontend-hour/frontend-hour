// Question Find all the permutations of the given string
// Example:
// input:
// 123

// output:
// 123
// 132
// 213
// 231
// 312
// 321

let input = '12345';
let permutations = [];

function calculatePermutations(input) {
    for (let i = 0; i < input.length; i++) {
        let newInput = input;
        let trimmedStr = newInput.substring(0, (i + 1) - 1) + newInput.substring(i + 1, newInput.length);
    
        for (let j = 0; j < input.length; j++) {
            let s = [trimmedStr.slice(0, j), input[i], trimmedStr.slice(j)].join('');
            if (!permutations.includes(s)) {
                permutations.push(s);
                calculatePermutations(s);
            }
        }
    }
}
calculatePermutations(input);
console.log(permutations);