let reduceArray = [1, 2, 3];
reduceArray.reduce((input, item) => {
  console.log(`input: ${input}, item: ${item}`);
  return input + item;
}, 11);

// Function Composition
// For ((x + 2) / 5) * 4;

function addTwo(num) {
  return num + 2;
}

function divideByFive(num) {
  return num / 5;
}

function multiplyByFour(num) {
  return num * 4;
}

let m1 = multiplyByFour(divideByFive(addTwo(3)));
console.log(
  'Function composition for `((x + 2) / 5) * 4` with `x` of 3 is:',
  m1
);

let a = [addTwo, divideByFive, multiplyByFour].reduce((input, fun) => {
  return fun(input);
}, 3);
console.log('Function Composition for same using Array reduce - ', a);
