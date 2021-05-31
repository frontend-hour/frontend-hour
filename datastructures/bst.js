
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  insert(value) {
    if (value <= this.value) {
        if (!this.left) {
          this.left = new BinaryTree(value);
        } else {
          this.left.insert(value);
        }
    } else {
        if (!this.right) {
          this.right = new BinaryTree(value);
        } else {
          this.right.insert(value);
        }
    }
  }
  
  contains(value) {
    if (value === this.value) return true;
    else if (value < this.value) {
        if (!this.value) return false;
        else return this.left.contains(value);
    } else if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(value);
    }
  }
  // DFT - Depth first traversal 
  // Iterative method
  depthFirstTraversal(iteratorFunc, order) {
    if (order === 'pre-order') iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === 'post-order') iteratorFunc(this.value);
  }
  // BFT - Breadth First Traversal
  // Interative method
  breadthFirstTraversal(iteratorFunc) {
    var Queue = [this];
    while (Queue.length) {
        var treeNode = Queue.shift();
        iteratorFunc(treeNode)
        if (treeNode.left) Queue.push(treeNode.left);
        if (treeNode.right) Queue.push(treeNode.right);
    }
  }
  getMinVal() {
    if (this.left) return this.left.getMinVal()
    else return this.value;
  }
  
  getMaxVal() {
    if (this.right) return this.right.getMaxVal();
    else return this.value;
  }
}


var bst = new BinaryTree(60);

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


console.log(bst.contains(11))


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
