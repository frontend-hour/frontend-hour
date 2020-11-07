function closureTest() {
  var x = 2;
  return x;
}
console.log(closureTest()); // returns 2
closureTest();
// console.log(x);  Functions local variable will not be available once the functions scope is closed.

function testClosure() {
  var x = 2;
  function closeX() {
    return x;
  }
  return closeX;
}

console.log(testClosure());
let testCloseX = testClosure(); // has closeX function definition
console.log(testCloseX()); // 2

function ticketBuilder(transport) {
  let passengerNo = 0;
  return function builder(name) {
    passengerNo++;
    console.log(
      'Your ticket in ' +
      transport +
      ' welcomes ' +
      name +
      '! and your passenger no is ' +
      passengerNo
    );
  };
}

let getBusTicket = ticketBuilder('Bus'); // Persistent Lexical scope reference data or Closed over variable environment - Consists of variable environment (arguments and variables) of ticketBuilder function.
// let getTrainTicket = ticketBuilder('Train');
console.log(getBusTicket('Raghu'));
console.log(getBusTicket('Chaitu'));
console.log(getBusTicket('Raghu1'));
