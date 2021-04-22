function power(base, exp) {
  let total = 1;
  let sign = false;
  if(exp < 0) {
    sign = true;
    exp = exp * -1;
  }
  return rec(total, base, exp)
//   for(let i = 1; i <= exp; i++) {
//     total = total * base;
//   }
  
  
  return sign ? 1/total : total;
}

function rec(total, base, exp) {
  if(!exp) {
    return total;
  } else {
    return rec(total * base, base, exp -1);
  }
}


function power(base, exp) {
  return exp === 0 ? 1 : base * power(base, --exp);
}


// 100 balls
// 1 defective ball - weight diff

// 50 - 50 - 1
// 25 - 25 - 2
// 12 - 12 - 3 // 1 ball
// 6 - 6 - 4
// 3 - 3 - 5
// 1 - 1  - 6 // 1 ball

console.log(power(2, -3));
