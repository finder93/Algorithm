// 实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。

// 输入: 2.00000, 10
// 输出: 1024.00000

// 输入: 2.10000, 3
// 输出: 9.26100

// 输入: 2.00000, -2
// 输出: 0.25000

var g_InvalidInput = false;
/**
 * @param {number} base
 * @param {number} exponent
 * @return {number}
 */
// var myPow = function (base, exponent) {
//     g_InvalidInput = false;

//     let absN = exponent > 0 ? exponent : -exponent;

//     if (base === 0.0 && exponent < 0) {
//         g_InvalidInput = true;
//         return 0.0;
//     }

//     if (base === 1.0) return 1.0;

//     if (base === -1.0) {
//         return absN % 2.0 === 0.0 ? 1.0 : -1.0;
//     }
//     let result = powWithUnsigned(base, absN);
//     if (exponent < 0) result = 1.0 / result;
//     return result;
// };

var powWithUnsigned = function (base, exponent) {
    if (exponent === 0) return 1.0;
    if (exponent === 1) return base;
    if (base >= 2.0 && exponent >= 52) return Infinity;

    // 简单地循环的话，当exponent很大时，效率太低
    // let result = 1;
    // for (let i = 1; i <= exponent; i++) {
    //     result *= base;
    // }

    let result = powWithUnsigned(base, exponent >> 1);
    result *= result;
    if ((exponent & 1) === 1) result *= base;

    return result;
};

// 快速幂
var myPow = function (base, exponent) {
    if (base === 0.0) return 0.0;
    if (base === 1.0) return 1.0;
    if (base === -1.0) return exponent & (1 === 1) ? -1.0 : 1.0;
    let res = 1.0;
    if (exponent < 0) {
        base = 1 / base;
        exponent = -exponent;
    }
    while (exponent > 0) {
        // 取余数 n % 2 等价于 判断二进制最右一位值 n & 1；
        if ((exponent & 1) === 1) res *= base;
        base *= base;
        // 向下整除 Math.floor(n/2) 等价于 右移一位 n >> 1
        // 最好不要使用 >> ，推荐使用 >>> 。因为最左边一位会被解析成符号位，当数字溢出时，会被解析成负数。
        exponent = exponent >>> 1;
        // 2147483648>>1 = -1073741824
    }
    return res;
};

console.log(myPow(2.0, -2147483648));
