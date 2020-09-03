// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
// 返回删除后的链表的头节点。

// 注意：此题对比原题有改动

// 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

// 删除单向链表中的某个节点i的两种方法：
// （1）从头节点遍历到节点 i 的前一个节点 h ，把 h 的next指向 i 的下一个节点 j ，再删除节点 i
// （2）把 i 节点的下一个节点 j 的内容，赋值给 节点 i，再将 i 的next指向节点 j 的下一节点，再删除节点 j
//      ！！！有时候像删除一个节点时，并不一定要删除这个节点本身

/**
 * Definition for singly-linked list.
 **/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head === null) return 0;
    let previous = null;
    let current = head;
    while (current !== null) {
        if (current.val === val) {
            if (previous === null) return current.next; // 删除的链表头节点，直接返回第二个节点，若只有一个节点，则会返回null
            if (current.next === null) {
                previous.next = null;
            } else {
                previous.next = current.next;
            }
            delete current;
            return head;
        } else {
            previous = current;
            current = current.next;
        }
    }
    return 0;
};

var n0 = new ListNode(0);
var n1 = new ListNode(1);
var n2 = new ListNode(2);
var n3 = new ListNode(3);

n0.next = n1;
n1.next = n2;
n2.next = n3;

console.log(deleteNode(n0, 4));
