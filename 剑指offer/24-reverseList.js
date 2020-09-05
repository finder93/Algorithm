// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head === null) return null;
    if (!head.next) return head;

    let front = null; // 指向当前节点上一个节点的指针
    let current = head; // 指向当前节点
    let next = head.next; // 指向当前节点的下一个节点

    while (next !== null) {
        next = current.next; // 保存当前节点的原next指针，防止修改next时，链表断裂
        current.next = front; // 修改当前节点的next指针，实现翻转链表
        front = current; // 保存当前节点，作为下一个节点的front
        current = next; // 按照原链表顺序，进入下一个节点
    }

    return front;
};

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var n0 = new ListNode(0);
var n1 = new ListNode(1);
var n2 = new ListNode(2);
var n3 = new ListNode(3);
var n4 = new ListNode(4);
var n5 = new ListNode(5);

n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

console.log(reverseList(n0));
