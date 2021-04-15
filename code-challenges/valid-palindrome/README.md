## Valid Palindrome

> Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 
```
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```
```
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```
 
```
Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
```

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let regex = /[A-Za-z0-9]/
    let plain = '';
    s = s.toLowerCase();
    for(let i = 0; i< s.length;i++) {
        if(s[i].match(regex)) {
            plain+=s[i];
        }
    }
    return plain === plain.split('').reverse().join('');
};
```
