// 请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。

// 示例 1：
// 输入：00000000000000000000000000001011
// 输出：3
// 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。

// ！！！
// 一条语句判断一个整数是否为 2 的整数次方
// 一个整数如果是2的整数次方，那么它的二进制表示中只有一位是1，而其他位都为0
// 将这个整数减去 1 之后再和它自己做 &运算，这个整数中的唯一的1就会变成0
// (n-1)&n === 0 ?

// ！！！
// 输入两个整数m和n，计算需要改变m的二进制中的多少位才能得到n
// 分两步骤：
//      1、求两个数的 ^异或
//      2、统计异或结果中 1 的个数

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    // 判断一个整数的最右边是不是1，只需把整数和1做 位与& 运算，看结果是不是0，数字1，除了最右边一位之外，所有位上都是0
    // while (n) {
    //     if (n & 1) count++;
    //     n = n >> 1;
    // }

    // 避免死循环，可以不右移输入的数字n
    let flag = 1;
    let i = 0;
    while (flag) {
        // 循环次数等于 n 的二进制位数
        i++;
        // 先与flag做 &运算，判断 n 的最低为是否为1，接着把flag左移一位得到2（二进制为'10'），再和n做运算……
        // 这样flag不停左移，每次判断 n 的其中一位是不是 1
        if (n & flag) count++;
        flag = flag << 1;
    }
    console.log(i);

    // // 把一个整数减去1，在和原整数做 &运算，会把该整数最右边的1会变成0。
    // // 那么这个整数的二进制表示中有多少个1，则可以进行多少次上述操作
    // while (n) {
    //     count++;
    //     n = (n - 1) & n;
    // }

    return count;
};
let n = 00000000000000000000000000001011;
console.log(hammingWeight(n));

console.log(hammingWeight(10 ^ 13));
