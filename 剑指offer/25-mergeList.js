// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 迭代
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    let head = new ListNode(0); // 虚拟头节点
    let preNode = head;

    // 循环直至两个链表中有一个遍历到了尾节点
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            preNode.next = l1;
            l1 = l1.next;
        } else {
            preNode.next = l2;
            l2 = l2.next;
        }
        preNode = preNode.next;
    }
    preNode.next = l1 === null ? l2 : l1; // 依据两个链表中到达尾节点的链表，将另一个链表的剩余节点合并进结果中

    return head.next;
};

// 递归;
// var mergeTwoLists = function (l1, l2) {
//     if (!l1) return l2;
//     if (!l2) return l1;

//     let head; // 头节点
//
//     // 将值更小的节点，作为讲要合并的节点的头节点，将剩余的两个链表传入下一次递归
//     if (l1.val < l2.val) {
//         head = l1;
//         head.next = mergeTwoLists(l1.next, l2);
//     } else {
//         head = l2;
//         head.next = mergeTwoLists(l1, l2.next);
//     }
//     return head;
// };

var n0 = new ListNode(0);
var n1 = new ListNode(1);
var n2 = new ListNode(2);
var n3 = new ListNode(3);
var n4 = new ListNode(4);
var n5 = new ListNode(5);

n0.next = n2;
n2.next = n4;

n1.next = n3;
n3.next = n5;

console.log(mergeTwoLists(n0, n1));
