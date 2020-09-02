/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// function push(node, val) {
//     if (val >= 1) {
//         node.next = new ListNode(val % 10);
//         val = Math.floor(val / 10);
//         push(node.next, val);
//     }
// }

// function sumList(list) {
//     var currentNode = list;
//     var sum = 0;
//     var i = 0;
//     while (currentNode) {
//         sum += currentNode.val * Math.pow(10, i);
//         currentNode = currentNode.next;
//         i++;
//     }
//     return sum;
// }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 假设除了数字 0 之外，这两个数都不会以 0 开头
// var addTwoNumbers = function (l1, l2) {
//     var result = new ListNode(0);
//     var sum = 0;
//     sum = sumList(l1) + sumList(l2);
//     console.log(sumList(l1), sumList(l2));
//     result.val = sum % 10;
//     sum = Math.floor(sum / 10);
//     push(result, sum);
//     console.log(result);
//     console.log(sumList(result));
//     return result;
// };
var addTwoNumbers = function (l1, l2) {
    var dummyHead = new ListNode(0);
    var p = l1,
        q = l2,
        curr = dummyHead;
    var carry = 0;
    while (p != null || q != null) {
        var x = (p != null) ? p.val : 0;
        var y = (q != null) ? q.val : 0;
        var sum = carry + x + y;
        carry = parseInt(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};
// var addTwoNumbers = function (l1, l2) {
//     var result = new ListNode(0)
//     add(l1,l2,result)
//     return result
// }

// function add(l1, l2, resultList) {
//     var result
//     if (l1 && l2) {
//         result = l1.val + l2.val + resultList.val
//         if (result >= 10) {
//             resultList.val = result - 10
//             resultList.next = new ListNode(1)
//         } else {
//             resultList.val = result
//             if (l1.next || l2.next) resultList.next = new ListNode(0)
//         }
//         add(l1.next, l2.next, resultList.next)
//     } else if (l1 && !l2) {
//         result = l1.val + resultList.val
//         if (result >= 10) {
//             resultList.val = result - 10
//             resultList.next = new ListNode(1)
//         } else {
//             resultList.val = result
//             if (l1.next) resultList.next = new ListNode(0)
//         }
//         add(l1.next, null, resultList.next)
//     } else if (!l1 && l2) {
//         result = l2.val + resultList.val
//         if (result >= 10) {
//             resultList.val = result - 10
//             resultList.next = new ListNode(1)
//         } else {
//             resultList.val = result
//             if (l2.next) resultList.next = new ListNode(0)
//         }
//         add(null, l2.next, resultList.next)
//     }
// }
var l1 = new ListNode(1)
// push(l1, 100000)
var l2 = new ListNode(9)
push(l2, 9)
// l2.next = new ListNode(2)
// l2.next.next = new ListNode(3)

addTwoNumbers(l1, l2)