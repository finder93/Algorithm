// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

// 输入: n = 1
// 输出: [1,2,3,4,5,6,7,8,9]

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let result = [];
    for (let i = 1; i <= Math.pow(10, n) - 1; i++) result.push(i);
    return result;
};

// 本质还是使用快速幂求出10^n次方
// 快速幂：将指数转换成二进制形式，例如a^(13)=a^(2^0+2^2+2^3)=a(2^0)a(2^2)a(2^3)
var printNumbers = function (n) {
    let base = 10,
        sum = 1,
        res = [];

    while (n != 0) {
        // 快速幂求解10^n
        if ((n & 1) == 1) {
            // 如果当前二进制最后一位为1
            sum *= base;
        }
        n >>>= 1;
        base *= base;
    }
    let i = 1;

    while (i < sum) {
        res.push(i++);
    }
    return res;
};

// 正确表示大数, 使用字符串表示
var printNumbers = function (n) {
    if (n < 0) return;

    let result = [];
    let num = "";
    /**
     * 递归求全排列
     * @param {string} num 用于拼接数字的字符串
     * @param {number} length 最大位数
     * @param {number} index  当前位数，从0开始
     */
    let printNumbersCore = function (num, length, index) {
        // 判断有上一次递归传入的当前位数，若等于最大位数，则存入结果数组
        if (index === length) {
            result.push(num);
            return;
        }
        for (let i = 0; i < 10; i++) {
            let temp = num;
            if (i !== 0 || num.length !== 0) num += i; // 从最高位开始，每确定一位，传入下一次递归，计算下一位
            // 遇到以0开头的，不添加到num中
            printNumbersCore(num, length, index + 1);
            num = temp;
        }
    };
    printNumbersCore(num, n, 0);

    return result.slice(1); // 取掉数组第一个元素 0
};

console.log(printNumbers(3));
