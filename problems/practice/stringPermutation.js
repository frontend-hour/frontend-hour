// 1234


// 2134 - r
// 2314
// 2341

// 2134 - d
// 1324 - r
// 1342

// 3124
// 1324 - d
// 1243 - r

// 4123
// 1423
// 1243 - d

let input = '1234';
let permutations = [];

function calculatePermutations(input) {
    for (let i = 0; i < input.length; i++) {
        let newInput = input;
        let trimmedStr = newInput.substring(0, (i + 1) - 1) + newInput.substring(i + 1, newInput.length);
    
        console.log(trimmedStr);
    
        for (let j = 0; j < input.length; j++) {
            let s = [trimmedStr.slice(0, j), input[i], trimmedStr.slice(j)].join('');
            if (!permutations.includes(s))
                permutations.push(s);
        }
    }
}
calculatePermutations(input);
calculatePermutations(input.split('').reverse().join(''));
console.log(permutations);