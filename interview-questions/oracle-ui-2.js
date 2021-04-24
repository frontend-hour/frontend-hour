
// Design cache for Factorial using Memorization
function factorialCreator() {
  let cache = {};
  
  return function factorial(n) {
    if(cache.hasOwnProperty(n)) {
      console.log('Returned from Cache')
      return cache[n];
    } else {
      let total = 1;
      for(let i = 1; i <= n; i++) {
        total = total * i;
      }
      cache[n] = total;
      console.log('Returned from Function')
      return total;
    }
  }
}

let fact = factorialCreator();

console.log(fact(3));
console.log(fact(3));
