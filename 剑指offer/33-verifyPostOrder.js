// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

//      5
//     / \
//    2   6
//   / \
//  1   3
// 示例 1：

// 输入: [1,6,3,2,5]
// 输出: false

// 示例 2：

// 输入: [1,3,2,6,5]
// 输出: true

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
// 递归分治
var verifyPostorder = function (postorder) {
    if (postorder === null || postorder.length === 0) return false;

    var verifyPostorderCore = function (postorder, start, end) {
        let root = postorder[end];

        // 在二叉搜索树中左子树节点的值小于根节点的值
        let i = start;
        while (i < end) {
            if (postorder[i] > root) break;
            i++;
        }

        // 在二叉搜索树中右子树节点的值大于根节点的值
        let j = i;
        while (j < end) {
            if (postorder[j] < root) return false;
            j++;
        }

        // 判断左子树是不是二叉搜索数
        let left = true;
        if (i > start) left = verifyPostorderCore(postorder, start, i - 1);

        // 判断右子树是不是二叉搜索树
        let right = true;
        if (i < end) right = verifyPostorderCore(postorder, i, end - 1);

        return left && right;
    };

    return verifyPostorderCore(postorder, 0, postorder.length - 1);
};

// 后续遍历结果是 [3,6,5,9,8,11,13,12,10]
// 从前往后不好看，我们来从后往前看 [10,12,13,11,8,9,5,6,3]

// 如果你仔细观察会发现一个规律，就是挨着的两个数如果arr[i]<arr[i+1]，那么arr[i+1]一定是arr[i]的右子节点，
// 这一点是毋庸置疑的，我们可以看下上面的10和12是挨着的并且10 < 12，所以12是10的右子节点。
// 同理12和13，8和9，5和6，他们都是挨着的，并且前面的都是小于后面的，所以后面的都是前面的右子节点。
// 如果想证明也很简单，因为比arr[i]大的肯定都是他的右子节点，如果还是挨着他的，肯定是在后续遍历中所有的右子节点最后一个遍历的，所以他一定是arr[i]的右子节点。

// 我们刚才看的是升序的，再来看一下降序的（这里的升序和降序都是基于后续遍历从后往前看的，也就是上面蓝色数组）。
// 如果arr[i] > arr[i + 1]，那么arr[i + 1]一定是arr[0]……arr[i]中某个节点的左子节点，并且这个值是大于arr[i + 1]中最小的。
// 我们来看一下上面的数组，比如13，11是降序的，那么11肯定是他前面某一个节点的左子节点，并且这个值是大于11中最小的，
// 我们看到12和13都是大于11的，但12最小，所以11就是12的左子节点。同理我们可以观察到11和8是降序，8前面大于8中最小的是10，所以8就是10的左子节点。
// 9和5是降序，6和3是降序，都遵守这个规律。

// 根据上面分析的过程，很容易想到使用栈来解决。
// 遍历数组的所有元素，如果栈为空，就把当前元素压栈。
// 如果栈不为空，并且当前元素大于栈顶元素，说明是升序的，那么就说明当前元素是栈顶元素的右子节点，就把当前元素压栈，
// 如果一直升序，就一直压栈。
// 当前元素小于栈顶元素，说明是倒序的，说明当前元素是某个节点的左子节点，
// 我们目的是要找到这个左子节点的父节点，就让栈顶元素出栈，直到栈为空或者栈顶元素小于当前值为止，其中最后一个出栈的就是当前元素的父节点。

// 辅助单调栈
var verifyPostorder = function (postorder) {
    // 单调栈使用，单调递增的单调栈
    let stack = [];
    // 表示上一个根节点的元素，这里可以把postorder的最后一个元素root看成无穷大节点的左孩子
    let root = Infinity;

    // 逆向遍历，就是翻转的先序遍历
    for (let i = postorder.length - 1; i >= 0; i--) {
        // 左子树元素必须要小于递增栈顶元素，否则就不是二叉搜索树
        if (postorder[i] > root) return false;

        while (stack.length !== 0 && stack[stack.length - 1] > postorder[i])
            // 数组元素小于单调栈的元素了，表示往左子树走了，记录下上个根节点
            // 找到这个左子树对应的根节点，之前右子树全部弹出，不再记录，因为不可能在往根节点的右子树走了
            root = stack.pop();

        // 这个新元素入栈
        stack.push(postorder[i]);
    }
    return true;
};

var postorder = [5, 7, 6, 9, 11, 10, 8];
console.log(verifyPostorder(postorder));
