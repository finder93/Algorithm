//  Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder == null || preorder.length == 0) {
        return null;
    }
    let length = preorder.length;
    let indexMap = new Map();
    for (let i = 0; i < length; i++) {
        indexMap.set(inorder[i], i);
    }
    let root = buildTreeCore(
        preorder,
        0,
        length - 1,
        inorder,
        0,
        length - 1,
        indexMap
    );
    return root;
};

function buildTreeCore(
    preorder, // 前序遍历序列
    preorderStart, // 当前子树的前序遍历在的 preorder 中的开始位置（索引）
    preorderEnd, // 当前子树的前序遍历在的 preorder 中的结束位置（索引）
    inorder, // 中序遍历序列
    inorderStart, // 当前子树的中序遍历在的 inorder 中的开始位置（索引）
    inorderEnd, // 当前子树的中序遍历在的 inorder 中的结束位置（索引）
    indexMap // 中序遍历序列的映射，用来通过节点的value值，获取其在中序遍历中位置（索引）
) {
    if (preorderStart > preorderEnd) {
        return null;
    }
    let rootVal = preorder[preorderStart]; // 利用 preorder 获取当前根节点的val属性
    let root = new TreeNode(rootVal); // 创建当前子树的根节点
    if (preorderStart == preorderEnd) {
        // 若 preorderStart == preorderEnd，说明是叶结点，直接返回当前节点
        return root;
    } else {
        let rootIndex = indexMap.get(rootVal); // 获取当前根节点在中序遍历序列中的位置（索引）,时间复杂度O(1)
        // let rootIndex = inorder.indexOf(rootVal); // 获取当前根节点在中序遍历序列中的位置（索引），时间复杂度O(n)，n为数组长度

        let leftNodes = rootIndex - inorderStart, // 计算当前左子树的节点数
            rightNodes = inorderEnd - rootIndex; // 计算当前右子树的节点数
        let leftSubtree = buildTreeCore(
            preorder,
            preorderStart + 1,
            preorderStart + leftNodes,
            inorder,
            inorderStart,
            rootIndex - 1,
            indexMap
        );
        let rightSubtree = buildTreeCore(
            preorder,
            preorderEnd - rightNodes + 1,
            preorderEnd,
            inorder,
            rootIndex + 1,
            inorderEnd,
            indexMap
        );
        root.left = leftSubtree;
        root.right = rightSubtree;
        return root;
    }
}
var preorder = [1, 2, 4, 5, 3, 6, 7];
var inorder = [4, 2, 5, 1, 6, 3, 7];
console.log(buildTree(preorder, inorder));
