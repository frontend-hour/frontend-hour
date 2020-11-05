export const greeting = 'Hello World';

function sum(num1, num2) {
  console.log('Sum:', num1, num2);
  return num1 + num2;
}

function subtract(num1, num2) {
  console.log('Subtract:', num1, num2);
  return num1 - num2;
}

// This is a private function
function privateLog() {
  console.log('Private Function');
}

export { sum as addition, subtract } 