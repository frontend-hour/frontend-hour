class Tree {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  
  addNode(name) {
    let newNode = new Tree(name);
    this.children.push(newNode);
  }
}

let myTree = new Tree('parent');
myTree.addNode('child1');
myTree.addNode('child2');

console.log(myTree);
