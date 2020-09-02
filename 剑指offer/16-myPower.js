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

// var powWithUnsigned = function (base, exponent) {
//     if (exponent === 0) return 1.0;
//     if (exponent === 1) return base;
//     if (base >= 2.0 && exponent >= 52) return Infinity;
//
//     // 简单地循环的话，当exponent很大时，效率太低
//     // let result = 1;
//     // for (let i = 1; i <= exponent; i++) {
//     //     result *= base;
//     // }

//     let result = powWithUnsigned(base, exponent >> 1);
//     result *= result;
//     if ((exponent & 1) === 1) result *= base;

//     return result;
// };

// 快速幂
var myPow = function (base, exponent) {
    if (base == 0) return 0;
    let b = exponent;
    let res = 1.0;
    if (b < 0) {
        base = 1 / base;
        b = -b;
    }
    while (b > 0) {
        if ((b & 1) == 1) res *= base;
        base *= base;
        b >>= 1;
    }
    return res;
};

console.log(myPow(2.0, -2147483648));
