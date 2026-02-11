/*
    It's another divide-and-conquer, recursive algorithm but it takes a slightly different approach.
    The basic gist is that you take the last element in the list and call that the pivot.
    Everything that's smaller than the pivot gets put into a "left" list and everything that's greater get's put in a "right" list.
    You then call quick sort on the left and right lists independently (hence the recursion.)
    After those two sorts come back, you concatenate the sorted left list, 
    the pivot, and then the right list (in that order.)
*/

function quickSort(array) {
    if (!array.length)
        return [];
    let pivot = array[array.length - 1];
    let leftList = [];
    let rightList = [];
    for (let i = 0; i < array.length - 1; i++) {
        if(array[i] <= pivot) {
            leftList.push(array[i]);
        } else {
            rightList.push(array[i]);
        }
    }

    return mergeArray(quickSort(leftList), [pivot], quickSort(rightList));
}

function mergeArray(left, pivot, right) {
    return left.concat(pivot).concat(right);
}

let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(quickSort(nums));