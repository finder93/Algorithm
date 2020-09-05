// 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
// B是A的子结构， 即 A中有出现和B相同的结构和节点值。

// 给定的树 A:

//      3
//     / \
//    4   5
//   / \
//  1   2
// 给定的树 B：

//    4
//   /
//  1
// 返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    let result = false;

    if (A !== null && B !== null) {
        if (A.val === B.val) result = tree1HasTree2(A, B);
        if (!result) result = isSubStructure(A.left, B);
        if (!result) result = isSubStructure(A.right, B);
    }

    return result;
};
var tree1HasTree2 = function (A, B) {
    if (B === null) return true;
    if (A === null) return false;

    if (!(A.val === B.val)) return false;

    return tree1HasTree2(A.left, B.left) && tree1HasTree2(A.right, B.right);
};

var tree10 = new TreeNode(8);
var tree11 = new TreeNode(8);
var tree12 = new TreeNode(7);
var tree13 = new TreeNode(9);
var tree14 = new TreeNode(2);
var tree15 = new TreeNode(4);
var tree16 = new TreeNode(7);
tree10.left = tree11;
tree10.right = tree12;
tree11.left = tree13;
tree11.right = tree14;
tree14.left = tree15;
tree14.right = tree16;

var tree20 = new TreeNode(8);
var tree21 = new TreeNode(9);
var tree22 = new TreeNode(3);
tree20.left = tree21;
tree20.right = tree22;

console.log(isSubStructure(tree10, tree20));
