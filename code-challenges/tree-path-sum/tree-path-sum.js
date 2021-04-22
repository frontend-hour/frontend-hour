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
