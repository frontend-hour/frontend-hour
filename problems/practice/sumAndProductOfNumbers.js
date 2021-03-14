// Question 1
// Given a number, write a program to find the sum of it's digits using recursion

// input: 12345
// output: 15

// input: 91827
// output: 27

function findSumOfGivenDigitsRecursion(digit) {
    if (isNaN(digit)) {
        return 'Not a valid Input';
    }
    let [first, ...rest] = (String(digit)).split('');

    if (rest && rest.length) {
        return Number(first) + findSumOfGivenDigitsRecursion(Number(rest.join('')));
    } else {
        return Number(first);
    }
}

console.log(findSumOfGivenDigitsRecursion(91827));

// Question 2
// Given 2 numbers, write a program to find their product using recursion

// input: 10,5
// output: 50

// input: -8,4
// output: -32

function findProductOfTwoNumberRecursion(a, b) {
    if (!a) return b;
    return a * findProductOfTwoNumberRecursion(undefined, b);
}

console.log(findProductOfTwoNumberRecursion(-8, 4));


