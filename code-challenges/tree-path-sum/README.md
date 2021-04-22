## Tree Path Sum

> Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum. 
> A leaf is a node with no children.

```
Example: 1
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
```
![image](https://user-images.githubusercontent.com/11692119/114972062-577f1d80-9e9b-11eb-8ca5-32ec0d1a590a.png)

```
Input: root = [1,2,3], targetSum = 5
Output: false
```

```
Input: root = [1,2], targetSum = 0
Output: false
```

```
The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
```

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return (root && pathSum(root, targetSum, root.val)) ? true : false;
};

function pathSum(node, target, sum) {
    if(target === sum && !node.left && !node.right) {
        return true;
    }
    if(node.left && pathSum(node.left, target, node.left.val + sum)) {
        return true;
    }
    if(node.right && pathSum(node.right, target, node.right.val + sum)) {
        return true;
    }
    return false;
}
```
