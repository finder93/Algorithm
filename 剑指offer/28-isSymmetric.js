// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

// 输入：root = [1,2,2,null,3,null,3]
// 输出：false

const mirrorTree = require("./27-treeMirror.js");

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 定义一种对称的前序遍历算法，即先访问父节点，再遍历它的右子节点，最后遍历它的左子节点
// 并且在遍历二叉树时把遇到的 null 指针也考虑进去
// 就可以通过比较二叉树的前序遍历和“对称前序遍历”来判断二叉树是不是对称树
var isSymmetric = function (root) {
    if (root === null) return true;

    // 递归，利用前序遍历和对称前序遍历，判断子树是否为对称
    var isSymmetricCore = function (root1, root2) {
        if (root1 === null && root2 === null) return true; // 若同时到达叶结点，说明之前的节点都通过了对称判断，可以返回true
        if (root1 === null || root2 === null) return false; // 若有一个遍历到叶结点，另一个没有，也返回false

        if (root1.val !== root2.val) return false; // 若当两个前根节点的值不相等，则直接返回false

        // 递归，等同于，root1在进行前序遍历，root2在进行对称的后续遍历
        return (
            isSymmetricCore(root1.left, root2.right) &&
            isSymmetricCore(root1.right, root2.left)
        );
    };

    return isSymmetricCore(root, root);
};

var node0 = new TreeNode(0);
var node1 = new TreeNode(1);
var node2 = new TreeNode(1);
var node3 = new TreeNode(3);
var node4 = new TreeNode(3);
var node5 = new TreeNode(3);
var node6 = new TreeNode(3);

node0.left = node1;
node0.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

console.log(isSymmetric(node0));
