// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

// 栈的特点是后进先出，即最后压入栈的元素最先弹出。
// 考虑到栈的这一特点，使用栈将链表元素顺序倒置。
// 从链表的头节点开始，依次将每个节点压入栈内，然后依次弹出栈内的元素并存储到数组中。

var reversePrint = function (head) {
    var result = [];
    var stack = [];
    while (head) {
        stack.push(head.val);
        head = head.next;
    }
    while (stack.length) {
        result.push(stack.pop());
    }
    return result;
};

// 递归
var reversePrint = function (head) {
    var result = [];
    fn(head, result); // 递归，利用递归的回溯阶段，反向打印链表
    return result;
};
function fn(head, arr) {
    if (head) {
        fn(head.next, arr);
        arr.push(head.val);
    }
}
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 测试数据
var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l3 = new ListNode(3);
l1.next = l2;
l2.next = l3;
console.log(reversePrint(l1));
