

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

// DFT - Depth first traversal 

BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    if (order === 'pre-order') iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === 'post-order') iteratorFunc(this.value);
};


// BFT - Breadth First Traversal 

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
    var Queue = [this];
    while (Queue.length) {
        var treeNode = Queue.shift();
        iteratorFunc(treeNode)
        if (treeNode.left) Queue.push(treeNode.left);
        if (treeNode.right) Queue.push(treeNode.right);
    }
}

function log(node) {
    return node.value;
}

bst.breadthFirstTraversal(log);

// 60
// 50
// 70
// 40
// 75
// 10
// 105
// 100
// 350


// Excercises -
// Getting min value in tree 

BST.prototype.getMinVal = function () {
    if (this.left) return this.left.getMinVal()
    else return this.value;
}

BST.prototype.getMaxVal = function () {
    if (this.right) return this.right.getMaxVal();
    else return this.value;
}


























// function factorial(number) {
//     if (number === 1) { // base case
//         return number
//     } else { // recursive case
//         return num * factorial(num - 1);
//     }
// }

