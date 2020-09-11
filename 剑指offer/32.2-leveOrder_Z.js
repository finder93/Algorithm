// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

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
//   [20,9],
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

    // 先每层从左到右的顺序存入result，在对奇数层的result[i]进行翻转，来达到 Z字形打印二叉树
    for (let i = 0; i < result.length; i++) {
        if ((i & 1) === 1) result[i].reverse();
    }
    return result;
};

// 之字形打印二叉树的规律：
// 需要用两个栈
// 在打印某一层的节点时，把下一层的子节点保存到相应的栈中
// 如果打印的是奇数层（第一层、第三层……），则先保存左子节点再保存右子节点到第一个栈里
// 如果当前打印的是偶数层（第二层、第四层……），则先保存右子节点再保存左子节点到第二个栈里
var levelOrder = function (root) {
    let result = [];
    if (root !== null) {
        let stack = [[], []];
        let current = 0;
        let next = 1;
        let depth = 0;

        stack[current].push(root);
        while (stack[0].length !== 0 || stack[1].length !== 0) {
            let pNode = stack[current].pop();

            if (!result[depth]) {
                result[depth] = [];
            }
            result[depth].push(pNode.val);

            if (current === 0) {
                if (pNode.left) stack[next].push(pNode.left);
                if (pNode.right) stack[next].push(pNode.right);
            } else {
                if (pNode.right) stack[next].push(pNode.right);
                if (pNode.left) stack[next].push(pNode.left);
            }

            // 当前栈长度为0，即当前层的节点已打印完毕
            if (stack[current].length === 0) {
                depth++;
                [current, next] = [next, current];
            }
        }
    }
    return result;
};

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
                // 在进入下一层之前，判断当前层是否为偶数层，若是则翻转result[depth]
                if ((depth & 1) === 1) {
                    result[depth].reverse();
                }
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
