let reduceArray = [1, 2, 3];
reduceArray.reduce((input, item) => {
  console.log(`input: ${input}, item: ${item}`);
  return input + item;
}, 11);

// Function Composition
let m = ((x + 2) / 5) * 4;

function addTwo(num) {
  return num + 2;
}

function divideByFive(num) {
  return num / 5;
}

function multiplyByFour(num) {
  return num * 4;
}

let m = multiplyByFour(divideByFive(addTwo(3)));

[addTwo, divideByFive, multiplyByFour].reduce((input, fun) => {
  return fun(input);
}, 3);
