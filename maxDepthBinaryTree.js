/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	var max = 0;

	(function traverse(node, counter){

		if(node === null) {
			if(counter > max) {
				max = counter;
			}
			counter = 0;
			return;
		} else {
			traverse(node.left, counter + 1)
			traverse(node.right, counter + 1)
		}
	})(root, 0);

	return max;

};
