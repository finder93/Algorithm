// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

// 示例:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.min();   --> 返回 -2.

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack[this.stack.length] = x;

    // 如果每次都把最小元素压入辅助栈minStack，就能保证辅助栈顶一直都是最小元素 <=> minStack[i]即表示stack[0:i]中的最小元素
    // 若minStack为空，表明x为第一个元素，则将其压入minStack
    // 若minStack不为空，则比较x和minSatck栈顶的元素的大小
    // 若x较小，则将x同时压入minStack，若x较大，则将minStack的栈顶元素，再次入栈
    let min =
        this.minStack.length === 0 ||
        x < this.minStack[this.minStack.length - 1]
            ? x
            : this.minStack[this.minStack.length - 1];

    this.minStack[this.minStack.length] = min;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let result = this.stack[this.stack.length - 1];
    this.stack.length -= 1;
    // 由于minStack[i]即表示stack[0:i]中的最小元素，所以当stack进行pop时，minStack也要同时pop
    // 以确保，当stack中的最小元素弹出时，minStack的栈顶依旧代表的是剩余stack中的最小元素
    this.minStack.length -= 1;
    return result;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 */
var obj = new MinStack();
obj.push(0);
obj.push(1);
obj.push(1);
obj.push(1);
obj.pop();
console.log(obj.min());
obj.pop();
console.log(obj.min());
obj.pop();
console.log(obj.min());
