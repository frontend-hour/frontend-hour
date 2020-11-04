

// function func() {
//     if () { // base case

//     }
//     else { // recursive case

//     }
// }

function factorial(number) {
    if (number === 1) { // base case
        return number
    }
    else { // recursive case
        return number * factorial(number - 1);
    }
}

factorial(4); // 24

// number = 4
// 4 * factorial(3) // 24
// number = 3
// 3 * factorial(2) // 6
// number = 2
// 2 * factorial(1) // 2

// number = 1 // 1

function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


// Insert method. 
BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
    } else {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
}

var bst = new BST(60);

bst.insert(50)
bst.insert(70)
bst.insert(40)
bst.insert(75)
bst.insert(105)
bst.insert(100)
bst.insert(10)
bst.insert(350)


console.log(bst);
console.log(bst.right)
console.log(bst.right.right);


// Contains method
BST.prototype.contains = function (value) {
    if (value === this.value) return true;
    else if (value < this.value) {
        if (!this.value) return false;
        else return this.left.contains(value);
    } else if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(value);
    }
}

console.log(bst.contains(11))







































// function factorial(number) {
//     if (number === 1) { // base case
//         return number
//     } else { // recursive case
//         return num * factorial(num - 1);
//     }
// }

