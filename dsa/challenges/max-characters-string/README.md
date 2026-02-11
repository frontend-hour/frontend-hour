## Find Max Chars in Given String

```javascript
function maxChar(str) {
    var Obj = {};
    var max = 0;
    var maxChar = '';

    for (var i of str) {
        if (Obj[i]) {
            Obj[i]++
        } else {
            Obj[i] = 1;
        }
    }
    console.log(Obj);

    for (var x in Obj) {
        if (Obj[x] > max) {
            max = Obj[x];
            maxChar = x;
        }
    }
    return (maxChar);
}
```