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
 * @return {number}
 */
var maxDepth = function(root) {
    return dig(root, root ? 1 : 0);
};

function dig(root, sum) {
    if(!root) {
        return sum
    } else {
        let left = root.left ? dig(root.left, root.left ? sum + 1: sum + 0) : sum;
        let right = root.right ? dig(root.right, root.right ? sum + 1: sum + 0) : sum;
        return  left === right ? left : (left > right) ? left : right;
    }
}
