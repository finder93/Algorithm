// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

// 栈的特性是：后入先出。
// 根据题目提示，使用 2 个栈即可。
// 一个栈inStack用来存储插入队列的数据，一个栈outStack用来从队列中取出数据。
// 算法分为入队和出队过程。
// 入队过程：
//      将元素放入 inStack 中。
// 出队过程：
//      outStack 不为空：弹出元素
//      outStack 为空：将 inStack 元素依次弹出，放入到 outStack 中（在数据转移过程中，顺序已经从后入先出变成了先入先出）
// push时间复杂度是 O(1)，pop空间复杂度是 O(1)。

var CQueue = function () {
    this.inStack = [];
    this.outStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.outStack.length) {
        return this.outStack.pop();
    } else {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
        return this.outStack.pop() || -1;
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
