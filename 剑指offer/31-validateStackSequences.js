// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
// 假设压入栈的所有数字均不相等。
// 例如，序列 { 1, 2, 3, 4, 5 } 是某栈的压栈序列，序列 { 4, 5, 3, 2, 1 } 是该压栈序列对应的一个弹出序列，但 { 4, 3, 5, 1, 2 } 就不可能是该压栈序列的弹出序列。

// 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// 输出：true
// 解释：我们可以按以下顺序执行：
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

// 输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// 输出：false
// 解释：1 不能在 2 之前弹出。

// 判断一个序列是不是栈的弹出序列——规律：
// 1、如果下一个弹出的数字刚好是栈顶数字，那么直接弹出；
// 2、如果下一个弹出的数字不在栈顶，则把压栈序列中还没有入栈的数字压入辅助栈，直到把下一个需要弹出的数字压入栈顶为止；
// 3、如果所有数字都压入栈后仍然没有找到下一个弹出的数字，那么该序列不可能是一个弹出序列；

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let isPossible = false;
    let nLen = pushed.length;
    if (pushed !== null && popped !== null) {
        let pNextPush = 0;
        let pNextPop = 0;
        let stack = [];

        while (pNextPop < nLen) {
            while (
                stack.length === 0 ||
                stack[stack.length - 1] !== popped[pNextPop]
            ) {
                if (pNextPush === nLen) break;
                stack.push(pushed[pNextPush]);
                pNextPush++;
            }
            if (stack[stack.length - 1] !== popped[pNextPop]) break;
            stack.pop();
            pNextPop++;
        }
        if (stack.length === 0 && pNextPop === nLen) isPossible = true;
    }
    return isPossible;
};

var validateStackSequences = function (pushed, popped) {
    // 考虑借用一个辅助栈 stack[]，模拟 压入 / 弹出操作的排列。根据是否模拟成功，即可得到结果。
    // 入栈操作： 按照压栈序列pushed的顺序执行。
    // 出栈操作： 每次入栈后，循环判断 “栈顶元素 == 弹出序列的当前元素poped[i]” 是否成立，将符合弹出序列顺序的栈顶元素全部弹出。
    // 由于题目规定 栈的所有数字均不相等 ，因此在循环入栈中，每个元素出栈的位置的可能性是唯一的（若有重复数字，则具有多个可出栈的位置）。
    // 因而，在遇到 “栈顶元素 == 弹出序列的当前元素” 就应立即执行出栈。

    let stack = [];
    let i = 0;
    for (let num of pushed) {
        stack.push(num); // num 入栈
        while (stack.length !== 0 && stack[stack.length - 1] == popped[i]) {
            // 循环判断与出栈
            stack.pop();
            i++;
        }
    }
    return stack.length === 0 ? true : false;
};

let pushed = [1, 2, 3, 4, 5];
let popped = [4, 5, 3, 2, 1];

console.log(validateStackSequences(pushed, popped));
