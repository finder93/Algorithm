// 如果一个链表中包含环，如何找到这个环的入口节点？

// 解决问题第一步：如何确定一个链表中包含环？
// 定义两个指针，同时从链表的头节点出发，一个指针一次走一步，另一个指针一次走两步。
// 如果走得快的指针追上了走得慢的指针，那么链表就包含环
// 如果走得快的指针到达尾节点，都没追上走得慢的指针，则链表不包含环

// 第二部：如何找到环的入口？
// 同样设置两个指针 p1 和 p2，指向链表头节点
// 若链表中的环包含 n 个节点，则 p1 先在链表上向前走 n 步
// 然后两个指针以相同的速度向前移动
// 当 p2 到达环的入口节点时，p1 已经绕着环走了一圈，又回到入口节点

// 如何获得环中节点的数量
// 利用第一步的两个指针
// 如果两个指针相遇，则表明链表中存在环，两个指针相遇的节点一定在环中
// 可以再设置一个指针从相遇点出发，一边继续向前移动，一边计数，当再次回到这个节点时，即可获得环中的节点数
var MeetingNode = function (head) {
    if (head === null) return null;

    let pSlow = head.next;
    if (pSlow === null) return null;
    let pFast = pSlow.next;

    while (pSlow !== null && pFast !== null) {
        if (pFast == pSlow) return pFast;

        pSlow = pSlow.next;

        pFast = pFast.next;
        if (pFast !== null) pFast = pFast.next;
    }

    return null;
};
var entryNodeOfLoop = function (head) {
    // 判断链表中是否包含环
    let meetingNode = MeetingNode(head);
    if (meetingNode === null) return null;

    // 获取环中的节点数
    let nodesInLoop = 1;
    let pNode1 = meetingNode;
    while (pNode1.next !== meetingNode) {
        pNode1 = pNode1.next;
        ++nodesInLoop;
    }

    // 确定环的入口节点
    pNode1 = head;
    // pNode1先走 nodesInLoop 步
    for (let i = 0; i < nodesInLoop; i++) {
        pNode1 = pNode1.next;
    }
    // 然后，pNode2再出发
    let pNode2 = head;
    while (pNode1 !== pNode2) {
        // 当pNode1和pNode2相遇时，pNode1已经绕环循环了一圈，和pNode2相遇在环的入口节点
        pNode1 = pNode1.next;
        pNode2 = pNode2.next;
    }
    return pNode1;
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
n5.next = n3;

console.log(entryNodeOfLoop(n0));
