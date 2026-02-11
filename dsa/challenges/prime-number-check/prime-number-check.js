function checkPrime(n) {
    counter = 0;
    for(let i = 1; i <= n; i ++) {
       if(n % i === 0) {
         counter ++;
       }
    }
    if(counter > 2) {
      return false;
    }
    return true;
  }
  
  console.log(checkPrime(10));