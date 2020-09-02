/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    if (!/[0-9]/.test(str) || str == null || str.length == 0) return 0
    var str_new = str.trim()
    if ((str_new[0] !== '-' && str_new[0] !== '+' && !/[0-9]/.test(str_new[0])) ||
        ((str_new[0] == '-' || str_new[0] == '+') && !/[0-9]/.test(str_new[1]))
    ) return 0

    var i = (str_new[0] == '-' || str_new[0] == '+') ? 1 : 0
    var result = (str_new[0] == '-' || str_new[0] == '+') ? str_new[0] : ''
    var INT_MAX = Math.pow(2, 31) - 1
    var INT_MIN = -INT_MAX - 1

    while (/[0-9]/.test(str_new[i])) {
        result += str_new[i]
        i++
    }
    console.log(result)
    result = parseInt(result)
    if (result >= INT_MAX) return INT_MAX
    if (result <= INT_MIN) return INT_MIN
    return result
};

var myAtoi = function (str) { // 大神 OTZ
    return Math.max(Math.min(parseInt(str.trim().match(/^[+|-]?\d+/) || 0), Math.pow(2, 31) - 1), -Math.pow(2, 31))
};
var s = "42"
console.log(myAtoi(s))