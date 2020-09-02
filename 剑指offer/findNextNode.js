/**
 * 给定一颗二叉树和其中一个节点，如何找到中序遍历中的下一个节点？
 * 树中节点除了有两个分别指向左、右的指针外，还有一个指向父节点的指针
 */

// 情况一：如果一个节点有右子树，那么它的下一个节点就是它的右子树中的最左子节点。
// 情况二：一个节点没有右子树，且是它父节点的左子节点，那么它在中序遍历中的下一个节点就是它的父节点。
// 情况三：一个节点没有右子树，且是它父节点的右子节点
//     可以沿着指向父节点的指针向上遍历，直到找到一个是它父节点的左子节点的节点。
//     1、如果这样的节点存在，则这个节点的父节点就是我们要找的下一个节点
//     2、如果不存在这样的节点，则下一个要寻找的节点不存在（当前节点为中序遍历中最后一个节点）

/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */
var findNextNode = function (node) {
    if (node === null) return -1;
    let next = null;
    if (node.right != null) {
        next = node.right;
        while (next.left != null) {
            next = next.left;
        }
    } else {
        let current = node;
        let parent = current.parent;
        while (parent != null) {
            if (current === parent.left) return (next = parent);
            current = parent;
            parent = current.parent;
        }
    }
    return next;
};

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
}

var a = new TreeNode("a");
var b = new TreeNode("b");
var c = new TreeNode("c");
var d = new TreeNode("d");
var e = new TreeNode("e");
var f = new TreeNode("f");
var g = new TreeNode("g");
var h = new TreeNode("h");
var i = new TreeNode("i");

a.left = b;
a.right = c;

b.parent = a;
b.left = d;
b.right = e;

c.parent = a;
c.left = f;
c.right = g;

d.parent = b;

e.parent = b;
e.left = h;
e.right = i;

f.parent = c;
g.parent = c;
h.parent = e;
i.parent = e;

console.log(findNextNode(d).val);
console.log(findNextNode(b).val);
console.log(findNextNode(h).val);
console.log(findNextNode(e).val);
console.log(findNextNode(i).val);
console.log(findNextNode(a).val);
console.log(findNextNode(f).val);
console.log(findNextNode(c).val);
console.log(findNextNode(g));
