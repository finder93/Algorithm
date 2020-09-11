// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：
// [
//   [3],
//   [9,20],
//   [15,7]
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
 * @return {number[]}
 */
var levelOrder = function (root) {
    let result = [];
    if (root === null) return result;

    // 递归，前序遍历数组，利用参数depth，将二叉树每一层的节点，存入result[depth]中
    var levelOrderCore = function (root, depth) {
        if (!result[depth]) {
            result[depth] = [];
        }
        result[depth].push(root.val);

        if (root.left) levelOrderCore(root.left, depth + 1);
        if (root.right) levelOrderCore(root.right, depth + 1);
    };
    levelOrderCore(root, 0);
    return result;
};

// 从上至下打印（即按层打印），又称为二叉树的 广度优先搜索（BFS）。
// BFS 通常借助 队列 的先入先出特性来实现。

// 从上到下打印二叉树的规律：
// 每一次打印一个节点的时候，如果该节点有子节点，则把该节点的子节点放到一个队列的末尾。
// 接下来到队列的头部取出最早进入队列的节点。
// 重复以上操作，直至队列中所有的节点都被打印出来。

// 借助两个变量，一个变量表示当前层中还没打印的节点数，另一个变量表示下一层节点的数目
var levelOrder = function (root) {
    let result = [];
    if (root !== null) {
        let queue = [];
        queue.push(root);
        let currentNode = null;
        let depth = 0; // 表示层数
        let nextLevel = 0; // 表示下一层节点的数目
        let toBePrinted = 1; // 表示当前层中还没打印的节点数

        while (queue.length) {
            currentNode = queue.shift();

            if (!result[depth]) {
                result[depth] = [];
            }
            result[depth].push(currentNode.val);
            toBePrinted--;

            if (currentNode.left) {
                queue.push(currentNode.left);
                nextLevel++;
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
                nextLevel++;
            }
            // 当toBePrinted变成 0 时，表示当前层的所有节点已经打印完毕，可以继续进入下一层
            if (toBePrinted === 0) {
                toBePrinted = nextLevel;
                nextLevel = 0;
                depth++;
            }
        }
    }
    return result;
};

var node0 = new TreeNode(0);
var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);
var node6 = new TreeNode(6);

node0.left = node1;
node0.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

console.log(levelOrder(node0));
