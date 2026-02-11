function multiply(num1, num2) {
  if(num2 !== undefined && num1 !== undefined) {
    return num1*num2;
  }
  if(num2 === undefined) {
    return function double(num2) {
      return num1 * num2;
    }
  }
}

console.log(multiply(4, 5));

let double = multiply(10);
console.log(double(40));
