var Stack = function () {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 *
 * @param {number} value
 * @return {void}
 */
Stack.prototype.push = function (value) {
    if (!this.queue1.length && !this.queue2.length) this.queue1.push(value);
    else {
        this.queue1.length ? this.queue1.push(value) : this.queue2.push(value);
    }
};

/**
 * @return {number}
 */
Stack.prototype.pop = function () {
    let _queueHasEle = this.queue1.length ? "queue1" : "queue2";
    let _queueNull = !this.queue1.length ? "queue1" : "queue2";
    if (this[_queueHasEle].length) {
        this[_queueNull] = this[_queueHasEle].splice(
            0,
            this[_queueHasEle].length - 1
        );
        return this[_queueHasEle].splice(0, 1)[0];
    }
};

var stack = new Stack();
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
console.log(stack.pop());
stack.push(4);
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
