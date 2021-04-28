//# 1 Impliment a power function that can take negative values as in exponent place
function power(base, exp) {
  let total = 1;
  let sign = false;
  if(exp < 0) {
    sign = true;
    exp = exp * -1;
  }
  return sign ? 1/total : total;
}
console.log(power(2, -3));

//# 2 Impliment the same using recursion
function power(base, exp) {
  return exp === 0 ? 1 : base * power(base, --exp);
}

// # 3 How do measure performance of a web page
// For a customer page speed redcued, idenfity the problem

// # 4
// There hundred balls one ball is defective in these balls
// All balls are manufactured equal in weight, but the defective ball weigh less
// 100 balls
// 1 defective ball - weight less
// given one common balance to indenfy the defective ball
// In how many steps can you impliment the steps to weight 

// 50 - 50 - 1
// 25 - 25 - 2
// 12 - 12 - 3 // 1 ball
// 6 - 6 - 4
// 3 - 3 - 5
// 1 - 1  - 6 // 1 ball
