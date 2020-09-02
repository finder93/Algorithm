/**
 * @param {number} num
 * @return {string}
 */

// 贪心
// 为了表示一个给定的整数，我们寻找适合它的最大符号。我们减去它，然后寻找适合余数的最大符号，依此类推，直到余数为0。
// 我们取出的每个符号都附加到输出的罗马数字字符串上。

var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
];
var intToRoman = function (num) {
    var sb = "";
    // Loop through each symbol, stopping if num becomes 0.
    for (var i = 0; i < values.length && num >= 0; i++) {
        // Repeat while the current symbol still fits into num.
        while (values[i] <= num) {
            num -= values[i];
            sb += symbols[i];
        }
        console.log(values[i], num, sb);
    }
    return sb;
};
// 时间复杂度：O(1)。由于有一组有限的罗马数字，循环可以迭代多少次有一个硬上限。因此，我们说时间复杂度是常数的，即 O(1)。
// 空间复杂度：O(1)，使用的内存量不会随输入整数的大小而改变，因此是常数的。

// 硬编码数字
// 计算出num（十进制）各个位数上的数字，分别对应罗马数字中的字符，如千位上的“1”对应“M”，百位上的“4”对应“CD”
var intToRoman = function (num) {
    var thousands = ["", "M", "MM", "MMM"];
    var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return (
        thousands[Math.floor(num / 1000)] +
        hundreds[Math.floor((num % 1000) / 100)] +
        tens[Math.floor((num % 100) / 10)] +
        ones[num % 10]
    );
};
// 时间复杂度：O(1)。无论输入的大小，都会执行相同数量的操作。因此，时间复杂度是常数的。
// 空间复杂度：O(1)，虽然我们使用数组，但不管输入的大小，它们都是相同的大小。因此，它们是常数级空间。
// 这种方法的缺点是，如果要扩展罗马数字，它是不灵活的（这是一个有趣的后续问题），如果num范围是1-3999999，硬编码会越来遇难管理
// 相反，贪心算法只需改动少许代码

console.log(intToRoman(3999));
