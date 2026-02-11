// Create a "shared" function that takes two array iterators
// and returns the numbers common in both arrays.

const i1 = function* () {
    yield* [0, 2, 14, 3, 4, 9, 10];
};

const i2 = function* () {
    yield* [1, 2, 9, 10, 14, 3, 21, 4, 10,];
};

let sharedNumbers = shared(i1(), i2());
console.log(sharedNumbers);

/*
@param {Iterator} iter1
@param {Iterator} iter2
@returns {Array} An array of number shared by both arrays
*/
function shared(iter1, iter2) {
    let commonNumber = [];
    let iter2Array = [];

    let iter1Val = iter1.next();
    let iter2Val = iter2.next();

    while(!iter2Val.done) {
        iter2Array.push(iter2Val.value);
        iter2Val = iter2.next();
    }

    while(!iter1Val.done) {
        if(
            !commonNumber.includes(iter1Val.value) &&
            iter2Array.includes(iter1Val.value)
        ) {
            commonNumber.push(iter1Val.value);
        }
        iter1Val = iter1.next();
    }

    return commonNumber;
}