## Find Common Characters

> Given an array words of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

> You may return the answer in any order.


```
Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
```

```
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
```

```
Note:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.
```
```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let first = words[0];
    let r = [];
    for(let i =  0; i < first.length; i++) {
        // console.log(first[i], '---');
        let flag = true;
        for(let j = 1; j < words.length; j++) {
            let idx = words[j].indexOf(first[i]);
            if(idx === -1) {
                flag = false;
            } else {
                let tmp = words[j].split('');
                tmp.splice(idx, 1);
                // console.log(tmp.splice(idx, 1), tmp);
                words[j] = tmp.join('');
            }
        }
        if(flag) {
            r.push(first[i]);
        }
    }
    return r;
};
```
