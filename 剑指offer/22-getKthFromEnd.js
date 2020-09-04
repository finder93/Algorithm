// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
// 例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

// 给定一个链表: 0->1->2->3->4->5, 和 k = 2.
// 返回链表 4->5.

// ！！！当一个指针遍历链表不能解决问题时，可以尝试两个指针来遍历链表
// 可以让其中一个指针遍历的速度快一些，或者让它先在链表上走上若干步
// 例如：求链表的中间节点（节点数为偶数，则返回中间两个的任意一个；若为奇数，则返回中间节点）
// 可以设置两个指针，同时开始遍历链表，第一个指针一次走两步，第二个指针一次走一步
// 当第一个指针到达尾节点时，第二个指针正好位于链表中间

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    if (head === null || k <= 0) return null;

    // 遍历两遍链表
    // let listlen = 0;
    // let temp = head;
    // while (head !== null) {
    //     listlen++;
    //     head = head.next;
    // }
    // head = temp;
    // let count = 0;
    // while (count !== listlen - k) {
    //     count++;
    //     head = head.next;
    // }
    // return head;

    // 只遍历链表一遍
    // 定义两个指针
    // 第一个指针从链表的头节点开始遍历向前走 k-1 步，第二个指针保持不动
    // 从第 k 步开始，第二个指针开始从链表的头节点开始遍历
    // 由于两个指针的距离k-1，当第一个指针到达链表的尾节点时，第二个指针正好指向倒数第 k 个节点
    let pAhead = head;
    let pBehind = null;

    for (let i = 0; i < k - 1; i++) {
        if (pAhead.next !== null) {
            pAhead = pAhead.next;
        } else {
            return null; // 当 k 大于链表长度时，返回空
        }
    }

    pBehind = head;
    while (pAhead.next !== null) {
        pAhead = pAhead.next;
        pBehind = pBehind.next;
    }
    return pBehind;
};

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

console.log(getKthFromEnd(n0, 7));
