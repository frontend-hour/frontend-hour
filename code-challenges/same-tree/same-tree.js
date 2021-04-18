/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === 'end' && q === 'end' || p === q) {
        return true;
    } else if(!p || !q) {
        return false;
    } else if(p.val === q.val) {
        return isSameTree(p.left ? p.left : 'end', q.left? q.left : 'end') &&                      isSameTree(p.right ? p.right : 'end', q.right ? q.right : 'end');
    } else {
        return false;
    }
    
};
