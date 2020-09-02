/* 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
// 递归
function TreeDepth(pRoot) {
    // 如果该树只有一个结点，它的深度为1
    // 如果根节点只有左子树没有右子树，那么树的深度为左子树的深度加1；
    // 同样，如果只有右子树没有左子树，那么树的深度为右子树的深度加1。
    // 如果既有左子树也有右子树，那该树的深度就是左子树和右子树的深度最大值加1.
    if (pRoot == null) return 0;
    let max =
        TreeDepth(pRoot.left) > TreeDepth(pRoot.right) // 计算左子树和右子树的层数，比较大小
            ? TreeDepth(pRoot.left) + 1
            : TreeDepth(pRoot.right) + 1;
    return max; // 返回子树的深度
}

// 层次遍历，非递归
function levelOrder(root) {
    // 存储最后层次遍历的结果
    let res = [];
    // 层数
    let count = 0;
    // 如果根节点为空，则返回空列表
    if (root === null) return count;
    // 模拟一个队列储存节点
    let q = [];
    // 首先将根节点入队
    q.push(root);
    // 列表为空时，循环终止
    while (q.length != 0) {
        // 使用列表存储同层节点
        let tmp = [];
        // 记录同层节点的个数
        let length = q.length;
        for (let i = 0; i < length; i++) {
            // 将同层节点依次出队
            // console.log("levelOrder -> q", q);
            let r = q.shift();
            if (r.left != null)
                // 非空左孩子入队
                q.push(r.left);
            if (r.right != null)
                // 非空右孩子入队
                q.push(r.right);
            tmp.push(r.val);
        }
        console.log("levelOrder -> tmp", tmp);
        if (tmp) count += 1;
        //  统计层数
        res.push(tmp);
    }
    return count;
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

var td = TreeDepth(node0);
console.log("td", td);
let lo = levelOrder(node0);
console.log("lo", lo);
