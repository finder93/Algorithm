// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。
// 请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
// 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    // 动态规划 时间O(n^2) 空间O(n)
    // 将f(n)定义为长度为n的绳子剪成若干段后各段长度乘积的最大值
    // 在剪第一刀时，有n-1种可能的选择，剪出的第一段绳子的可能长度为1、2、3……n-1
    // 因此f(n)=max{f(i)xf(n-i)}，其中0<i<n
    // 此为从上至下的递归公式，会存在很多重复子问题，类似递归求Fibonacci
    // 更好的方法是，从下至上的顺序计算，由f(0),f(1)开始计算到f(n)
    if (n < 2) return "Invalid Parameter";
    if (n === 2) return 1;
    if (n === 3) return 2;

    let products = [0, 1, 2, 3]; // 存储子问题的最优解，products[i]表示把长度为i的绳子剪成若干段之后各段长度乘积的最大值，即f(i)，i>=4

    let max = 0;
    let product;

    for (let i = 4; i <= n; i++) {
        // i从下至上，每循环一次，即求解子问题：长度为i的绳子剪成若干段后各段长度乘积最大值
        // 注意，子问题的最优解可以是自身（一刀未剪）
        max = i === n ? 0 : i;
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            // 此循环内，计算所有可能的f(i)*f(i-j)，并比较它们的最大值
            product = products[j] * products[i - j];
            if (max < product) max = product;
            products[i] = max;
        }
    }

    max = products[n];
    delete products;
    return max;
};

var cuttingRope_2 = function (n) {
    // 贪婪算法 时间和空间 O(1)
    // 当n>=5时，尽可能多地剪长度为3的绳子； 由n>=5时，可知2(n-2)>n 并且 3(n-3)>n，同时3(n-3)>2(n-2)
    // 当剩下的绳子长度为4时，把绳子剪成两段长度为2的绳子
    if (n < 2) return "Invalid Parameter";
    if (n === 2) return 1;
    if (n === 3) return 2;

    // 尽可能多剪长度为3的绳子段
    // 当绳子最后长度为4的时候，不能再剪去长度为3的绳子段
    // 此时剪成2x2的两段

    // let timesOf3 = Math.floor(n / 3);
    // if (n - timesOf3 * 3 === 1) timesOf3 -= 1;

    // let timesOf2 = (n - timesOf3 * 3) / 2;
    // // let result = Math.pow(3, timesOf3) * Math.pow(2, timesOf2); // 当 指数 极大时，慎用，可能出现精度问题

    // let result = 1;
    // for (let i = 1; i <= timesOf3; i++) {
    //     result = (result * 3) % (1e9 + 7);
    // }
    // result = (result * Math.pow(2, timesOf2)) % (1e9 + 7);
    // return result;

    let result = 1;
    while (n >= 5) {
        result = (result * 3) % (1e9 + 7);
        n -= 3;
    }
    return (result = (result * n) % (1e9 + 7));
};

console.log(cuttingRope(120));
console.log(cuttingRope_2(120));
