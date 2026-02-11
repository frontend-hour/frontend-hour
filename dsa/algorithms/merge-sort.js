/*
    The basic gist of merge sort is that you're going to take your big list, 
    and first divide down in two half size lists and recursively call merge sort on those smaller list,
    which in turn will do the same. The base case is when you have a list of one,
    at which point you will return that sorted list of one. On the way up the recursive calls,
    you will merge those sorted lists together
*/

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    let halfIndex = Math.ceil(array.length / 2)

    let first = array.slice(0, halfIndex);
    let second = array.slice(halfIndex, array.length);

    return mergeArray(mergeSort(first), mergeSort(second));
}

function mergeArray(left, right) {
    const results = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        }
        else {
            results.push(right.shift());
        }
    }
    return results.concat(left, right);
}

let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(mergeSort(nums));


// Also a detailed example in https://stackabuse.com/merge-sort-in-javascript/
