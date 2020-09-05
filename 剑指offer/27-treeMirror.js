// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 递归遍历二叉树
// var mirrorTree = function (root) {
//     if (root === null) return root;

//     mirrorTreeCore(root);

//     return root;
// };
// var mirrorTreeCore = function (root) {
//     if (root === null) return;
//     let tempNode;
//     tempNode = root.right;
//     root.right = root.left;
//     root.left = tempNode;
//     // console.log("Mirror -> root", root);
//     mirrorTree(root.left);
//     mirrorTree(root.right);
// };

// 利用栈，遍历二叉树
var mirrorTree = function (root) {
    if (root === null) return null;

    // 定义一个栈，用于遍历二叉树
    // 先将根节点入栈
    // 1、根结点出栈
    // 2、然后其左节点和右节点依次入栈
    // 循环1和2步骤，直到栈为空，即遍历完毕
    let stack = [root];

    while (stack.length) {
        // 前序遍历
        let node = stack.pop();

        if (node.right != null) stack.push(node.right);
        if (node.left != null) stack.push(node.left);

        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;
    }
    return root;
};

// 定义一个二叉树
var node0 = new TreeNode(0);
var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);
var node6 = new TreeNode(6);
// node0.left = node1;
// node1.left = node2;
// node2.left = node3;
// node3.left = node4;
// node4.left = node5;

node0.left = node1;
node0.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

console.log(mirrorTree(node0));
