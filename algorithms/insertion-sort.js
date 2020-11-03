/*
    Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
    The array is virtually split into a sorted and an unsorted part
    Values from the unsorted part are picked and placed at the correct position in the sorted part.
 */

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                let currentIndexElem = array.splice(i, 1);
                array.splice(j, 0, currentIndexElem[0]);
            }
        }
    }
    return array;
}

let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(insertionSort(nums));
console.log(nums);