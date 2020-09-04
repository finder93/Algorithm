// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
// 例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，
// 但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。

// 有限状态机
// 表示数值的字符串，遵循模式 A[.[B]][e|EC] 或者 .B[e|EC]
// 其中A为数值的整数部分 ——> 可能以'+'或者'-'开头的0-9的数位串
// B紧跟着小数点，为数值的小数部分 ——> 以开头的0-9的数位串，不能以'+'或者'-'开头
// C紧跟着'e'或者'E'，为数值的指数部分 ——> 可能以'+'或者'-'开头的0-9的数位串

// A部分不是必须的
// 若A为空，则小数部分不能为空

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    if (s === null || s.length === 0) return false;
    s = s.trim(); // 去除字符串s前后的空格字符 ‘ ’

    let i = 0; // 指针，代表字符串s的第i个元素

    // scanInt用来扫描可能以'+''-'为起始的0-9的数位，可以用来匹配数值模式中的A和C部分
    var scanInt = function (s) {
        if (s[i] === "+" || s[i] === "-") {
            i++;
        }
        return scanUnsignedInt(s); // 判断完'+''-'后，进入判断0-9的数位
    };
    // scanUnsignedInt用来扫描字符串中0-9的数位（类似一个无符号整数），可以用来匹配数值模式中的B部分
    var scanUnsignedInt = function (s) {
        let temp = i;
        while (i !== s.length && s[i] >= 0 && s[i] <= 9 && s[i] !== " ") {
            i++;
        }
        // 当 s 中存在若若干0-9的数字时，返回true
        return i > temp;
    };

    let numeric = scanInt(s); // 尽可能多扫描0-9的数位（可能有在起始处有‘+’或‘-’），A部分

    if (s[i] === ".") {
        // 若遇到小数点 '.' 则开始扫描数值的小数部分B
        i++;

        // 使用 ||
        // 小数可以没有整数部分，如 .123
        // 小数点后面可以没有数字，如 123.
        // 也可以小数点前面和后面都有数字，如 123.123
        numeric = scanUnsignedInt(s) || numeric;
    }
    if (s[i] === "e" || s[i] === "E") {
        // 若遇到 'e'/'E' 则开始扫描表示数值指数的C部分
        i++;

        // 使用 &&
        // 当 e 或 E 前面没有数字时，整个字符串不能表示数字，如 .e1 e1
        // 当 e 或 E 后面没有整数时，整个字符串不能表示数字，如 12e 12e+5.4
        numeric = numeric && scanInt(s);
    }

    return numeric && i === s.length;
};

// 利用正则表达式
var isNumber = function (s) {
    return /^[+-]?(\d+(\.\d*)?|(\.\d+))([eE][+-]?\d+)?$/.test(s.trim());
};

let s1 = ". ";
let s2 = " .";
let s3 = "1 ";
console.log(isNumber(s1));
console.log(isNumber(s2));
console.log(isNumber(s3));
