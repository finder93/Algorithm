/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) { // 数字转字符串可能会比较耗时
    if (x < 0) return false
    if (x >= 0 && x < 10) return true
    var xStr = x.toString()
    var len = xStr.length
    var i, j
    if (len % 2 == 0) {
        i = len / 2 - 1
        j = i + 1
    } else {
        i = j = Math.ceil(len / 2) - 1
    }
    while (xStr[i] == xStr[j] && i >= 0 && j < len) {
        i--
        j++
    }
    if (i == -1) return true
    else return false
};
var IsPalindrome = function (x) {
    // 特殊情况：
    // 如上所述，当 x < 0 时，x 不是回文数。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false
    }

    var revertedNumber = 0
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10
        x = Math.floor(x / 10)
    }

    // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
    // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
    // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
    return x == revertedNumber || x == Math.floor(revertedNumber / 10)
}

var x = 10
console.log(isPalindrome(x))