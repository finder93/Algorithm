// 求Fibonacci数列的第 n 项
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

function fibonacci(n) {
    // 递归，O()随n的指数增长
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci(n) {
    // 循环实现，O(n)
    let result = [0, 1];
    if (n < 2) return result[n];
    let fibNMinusOne = 1,
        fibNMinusTwo = 0,
        fibN = 0;
    for (let i = 2; i <= n; i++) {
        fibN =
            fibNMinusOne + fibNMinusTwo > 1000000007
                ? (fibNMinusOne + fibNMinusTwo) % 1000000007
                : fibNMinusOne + fibNMinusTwo;
        // fibNMinusTwo = fibNMinusOne;
        // fibNMinusOne = fibN;
        [fibNMinusOne, fibNMinusTwo] = [fibN, fibNMinusOne];
    }
    return fibN;
}
console.log(new Date());
console.log(fibonacci(2));
console.log(new Date());
