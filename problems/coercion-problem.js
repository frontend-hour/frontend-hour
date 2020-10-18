function Increment() {
    let count = 0;
    return {
        toString() {
            return count ++;
        }
    }
}


// DO NOT CHANGE CODE BELOW
let increment1 = new Increment();
let increment2 = Increment();

console.log(increment1 == +increment2); // true
console.log(`val: ${increment1}`);      // val: 1
console.log(`val: ${increment1}`);      // val: 2
console.log(`val: ${increment1}`);      // val: 3