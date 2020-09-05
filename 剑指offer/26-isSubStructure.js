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

// 第一步，A树中找到和B树的根节点的值一样的节点R；
// 第二步，判断A树中以R为根节点的子树是不是包含和B树一样的结构

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
    // 递归调用 isSubStructure 遍历二叉树A
    // 如果发现某一节点的值和B树的头节点的值相同，则调用 tree1HasTree2 进行第二步判断
    let result = false;

    if (A !== null && B !== null) {
        if (equal(A.val, B.val)) result = tree1HasTree2(A, B);
        if (!result) result = isSubStructure(A.left, B);
        if (!result) result = isSubStructure(A.right, B);
    }

    return result;
};
var tree1HasTree2 = function (A, B) {
    // 判断树A中以R为根节点的子树，是不是和树B具有相同的结构

    // 若B为空，则表明达到B树的叶节点，返回true
    if (B === null) return true;
    // 若A为空，则表示达到A树的叶节点，返回false
    if (A === null) return false;

    // 如果节点R的值和树B根节点的值不同，则以R为根节点的子树和树B肯定不具有相同的节点
    if (!equal(A.val, B.val)) return false;

    // 如果节点R的值和树B根节点的值相同，则递归地判断它们各自的左右节点的值是不是相同
    return tree1HasTree2(A.left, B.left) && tree1HasTree2(A.right, B.right);
};
var equal = function (num1, num2) {
    // 若两个数相差很小，就可以认为它们相等
    return Math.abs(num1 - num2) <= Number.EPSILON;
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
var tree22 = new TreeNode(2);
var tree23 = new TreeNode(4);
tree20.left = tree21;
tree20.right = tree22;
tree22.left = tree23;

console.log(isSubStructure(tree10, tree20));
