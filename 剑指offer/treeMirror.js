/* 操作给定的二叉树，将其变换为源二叉树的镜像。 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Mirror(root) {
    // write code here
    if (root === null) return;
    let tempNode;
    tempNode = root.right;
    root.right = tempNode;
    // console.log("Mirror -> root", root);
    Mirror(root.left);
    Mirror(root.right);
}

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

Mirror(node0);
