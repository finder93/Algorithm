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
var res;
var nine = 0,
    count = 0,
    start,
    _n;
let num = [],
    loop = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var printNumbers = function (n) {
    res = [];
    num = "";
    start = n - 1;
    dfs(0);
    return res;
};
var dfs = function (x) {
    if (x == n) {
        let s = String.valueOf(num).substring(start);
        if (s !== "0") res[count++] = Number.parseInt(s);
        if (n - start == nine) start--;
        return;
    }
    for (let i in loop) {
        if (i == "9") nine++;
        num[x] = i;
        dfs(x + 1);
    }
    nine--;
};

console.log(printNumbers(3));
