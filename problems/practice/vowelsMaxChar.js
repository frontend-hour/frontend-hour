// 1. Number of Vowels in Given String
// 2. Find Max Chars in Given String

// Solution for 1 

function vowelsInString(str) {
    // get count of vowels in string
    // compare with vowels

    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i of str) {
        if (vowels.includes(i)) {
            count++;
        }
    }
    return count;
}

// solution for 2

function maxChar(str) {
    // Creating an Obj of Chars with count of each
    // get the character from Obj which has max value

    var Obj = {};
    var max = 0;
    var maxChar = '';

    for (var i of str) {
        // Obj[i] ? Obj[i]++ : Obj[i] = 1; 
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

