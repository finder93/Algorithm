// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

// 假设一个二叉搜索树具有如下特征：
//     节点的左子树只包含小于当前节点的数。
//     节点的右子树只包含大于当前节点的数。
//     所有左子树和右子树自身必须也是二叉搜索树。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 递归
// 设计一个递归函数 helper(root, lower, upper) 来递归判断，
// 函数表示考虑以 root 为根的子树，判断子树中所有节点的值是否都在 (l,r) 的范围内（注意是开区间）。
// 如果 root 节点的值 val 不在 (l,r)的范围内说明不满足条件直接返回，否则我们要继续递归调用检查它的左右子树是否满足
// 如果都满足才说明这是一棵二叉搜索树。

// 那么根据二叉搜索树的性质，在递归调用左子树时，我们需要把上界 upper 改为 root.val，
// 即调用 helper(root.left, lower, root.val)，因为左子树里所有节点的值均小于它的根节点的值。
// 同理递归调用右子树时，我们需要把下界 lower 改为 root.val，即调用 helper(root.right, root.val, upper)。

// 函数递归调用的入口为 helper(root, -inf, +inf)， inf 表示一个无穷大的值。

const helper = (root, lower, upper) => {
    console.log(lower, upper);
    if (root === null) return true;
    if (root.val <= lower || root.val >= upper) return false;
    return (
        helper(root.left, lower, root.val) &&
        helper(root.right, root.val, upper)
    );
};
var isValidBST = function (root) {
    return helper(root, -Infinity, Infinity);
};
// 时间复杂度 : O(n)，其中 n 为二叉树的节点个数。在递归调用的时候二叉树的每个节点最多被访问一次，因此时间复杂度为 O(n)。
// 空间复杂度 : O(n)，其中 n 为二叉树的节点个数。
// 递归函数在递归过程中需要为每一层递归函数分配栈空间，所以这里需要额外的空间且该空间取决于递归的深度，即二叉树的高度。
// 最坏情况下二叉树为一条链，树的高度为 n，递归最深达到 n 层，故最坏情况下空间复杂度为 O(n) 。

// 中序遍历
// 基于方法一中提及的性质，我们可以进一步知道二叉搜索树「中序遍历」得到的值构成的序列一定是升序的，
// 这启示我们在中序遍历的时候实时检查当前节点的值是否大于前一个中序遍历到的节点的值即可。
// 如果均大于说明这个序列是升序的，整棵树是二叉搜索树，否则不是，下面的代码我们使用栈来模拟中序遍历的过程。
// 二叉搜索树保证了左子树的节点的值均小于根节点的值，根节点的值均小于右子树的值，因此中序遍历以后得到的序列一定是升序序列。

// var isValidBST = function (root) {
//     let stack = []; // 用栈模拟中序遍历过程
//     let inorder = -Infinity;

//     while (stack.length || root !== null) {
//         while (root !== null) {
//             stack.push(root);
//             root = root.left;
//         }
//         root = stack.pop();
//         // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
//         if (root.val <= inorder) return false;
//         inorder = root.val;
//         root = root.right;
//     }
//     return true;
// };
// 时间复杂度 : O(n)O，其中 n 为二叉树的节点个数。二叉树的每个节点最多被访问一次，因此时间复杂度为 O(n)。
// 空间复杂度 : O(n)，其中 n 为二叉树的节点个数。栈最多存储 nn 个节点，因此需要额外的 O(n) 的空间。

var t1 = new TreeNode(10);
var t2 = new TreeNode(-1);
var t3 = new TreeNode(15);
var t4 = new TreeNode(6);
var t5 = new TreeNode(20);

t1.left = t2;
t1.right = t3;
t3.left = t4;
t3.right = t5;

console.log(isValidBST(t1));
