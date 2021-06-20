## Sort Characters By Frequency

> Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.
> 
```
Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
```
```
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
```
```
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
```
```
Constraints:

1 <= s.length <= 5 * 105
s consists of English letters and digits.
```


```js
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let temp = {};
    
    for(let i = 0; i < s.length; i++) {
        if(temp.hasOwnProperty(s[i])) {
            temp[s[i]] += 1;
        } else {
            temp[s[i]] = 1;
        }
    }
    
    let sortable = [];
    
    Object.keys(temp).forEach((key) => {
        sortable.push({ value : temp[key], key : key });
    });  
    sortable.sort((a, b) => b.value - a.value );
    
    
    let result = '';
    
    for(let j = 0; j < sortable.length; j++) {
        for(let k = 0; k < sortable[j].value; k++) {
            result += sortable[j].key;
        }
    }
 
    return result;
};
```
