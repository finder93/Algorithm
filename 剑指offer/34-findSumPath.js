// 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

// 示例:
// 给定如下二叉树，以及目标和 sum = 22，

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// 返回:
// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (root === null) return [];

    let result = [];
    let path = [];
    let currentSum = 0;

    // 前序遍历的方式访问树的节点
    // 访问到某节点时，把该节点添加到路径上，并累加该节点的值
    var pathSumCore = function (root, sum, path, currentSum) {
        currentSum += root.val;
        path.push(root.val);

        let isLeaf = root.left === null && root.right === null;

        // 如果该节点为叶节点，并且路径中节点的值得和刚好等于输入的整数
        // 则当前路径符合要求，将该路径拷贝进result数组中
        if (currentSum === sum && isLeaf) {
            result.push([...path]); // 因为path为引用类型，需要利用 ... 对path进行拷贝，防止后续回溯时，path.pop()将path重置为空
        }

        // 若当前节点不是叶节点，则继续访问其左右子节点
        if (root.left !== null) {
            pathSumCore(root.left, sum, path, currentSum);
        }
        if (root.right !== null) {
            pathSumCore(root.right, sum, path, currentSum);
        }

        // 当前节点访问结束后，递归函数将自动回到它的父节点
        // 因此在函数退回之前要在路径上删除当前节点（减去当前节点的值）
        // 以确保返回父节点时，路径刚好是从根节点到父节点
        path.pop(); // 回溯时，路径上删除当前节点
    };

    pathSumCore(root, sum, path, currentSum);
    return result;
};

var node0 = new TreeNode(5);
var node1 = new TreeNode(4);
var node2 = new TreeNode(8);
var node3 = new TreeNode(11);
var node4 = new TreeNode(13);
var node5 = new TreeNode(4);
var node6 = new TreeNode(7);
var node7 = new TreeNode(2);
var node8 = new TreeNode(5);
var node9 = new TreeNode(1);

node0.left = node1;
node0.right = node2;
node1.left = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node5.left = node8;
node5.right = node9;

console.log(pathSum(node0, 22));
