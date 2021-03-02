// Find the length of the longest substring without repeating characters. 

  

let input1 = "abcabcbb" // abc, bca, cab 

// Output: 3 

  

let input2 = "pwwkew" // wke, kew 

// Output: 3

function findLongestString(inputString) {
    let main = [];
    let temp = [];
    for(let i = 0; i < inputString.length; i++) {
        if(temp.indexOf(inputString[i]) !== -1) {
            main.push(temp.join('').length);
            temp.splice(0, temp.indexOf(inputString[i]) + 1);
            temp.push(inputString[i]);
        } else {
            temp.push(inputString[i]);
        }
    }
    main.push(temp.join('').length);
    console.log(main);
    return main.sort().reverse()[0];
}

console.log(findLongestString(input1));