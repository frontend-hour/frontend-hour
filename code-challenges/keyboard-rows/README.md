## Keyboard Row

> Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

![image](https://user-images.githubusercontent.com/11692119/119174499-491db600-ba86-11eb-83bc-3775f554cef1.png)


### In the American keyboard:

```
the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
```

 
```
Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
```
```
Example 2:

Input: words = ["omk"]
Output: []
```
```
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
```

```js
var findWords = function(words) {
    let row1 = 'qwertyuiop';
    let row2 = 'asdfghjkl';
    let row3 = 'zxcvbnm';
    let result = [];
    
    for(let i = 0; i < words.length; i++) {
        let count = 1;
        let row = '';
        if(row1.includes(words[i][0].toLowerCase())) {
            row = row1;
        } else if(row2.includes(words[i][0].toLowerCase())) {
            row = row2;
        } else if(row3.includes(words[i][0].toLowerCase())) {
            row = row3;
        }
        for(let j = 1; j < words[i].length; j++) {
            if(row.includes(words[i][j].toLowerCase())) {
                count+=1;
            }
        }
        if(count === words[i].length) {
            result.push(words[i]);
        }
    }
    return result;
    
};
```
