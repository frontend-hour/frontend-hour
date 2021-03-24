let input1 = [1, 2, 3, 1, 3, 4, 4, 4, 4, 2, 5];

function getFrequencyCount(list) {
    let frequency = {};
    for (let i = 0; i < list.length; i++) {
        if (!frequency[list[i]]) {
            frequency[list[i]] = 1;
        } else {
            frequency[list[i]] += 1;
        }
    }
    let keys = Object.keys(frequency);
    for (let j = 0; j < keys.length; j++) {
        console.log(`'${keys[j]}' is present ${frequency[keys[j]]} time(s)`);
    }
}

getFrequencyCount(input1);

// Unique Values
let input2 = [1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 6, 7];

function getUniqueValues(list) {
    let uniques = [];
    for (let val of input2) {
        if (!uniques.includes(val)) {
            uniques.push(val);
        }
    }
    return uniques.length;
}

console.log(getUniqueValues(input2));

// Check Power N

function checkPowerN(arr1, arr2, N) {
    let flag = true;
    for(let k of arr1) {
        if(!arr2.includes(Math.pow(k, N))) {
            flag = false;
        }
    }
    return flag;
}

console.log(checkPowerN([1, 2, 3, 4], [4, 9, 1, 16], 2));