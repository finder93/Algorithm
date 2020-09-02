/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) { // 调用库函数较多不推荐
//     if (x > -10 && x < 10) return x
//     var x_new = x > 0 ? x : -x
//     var result = x_new.toString().split('').reverse().join('')
//     var res = parseInt((x >= 0 ? '' : '-') + result)
//     if (res >= -Math.pow(2, 31) && res <= Math.pow(2, 31)) return res
//     else return 0
// };

var reverse = function (x) {
    var rev = 0
    var INT_MAX = Math.pow(2, 31)-1
    var INT_MIN = -INT_MAX-1
    while (x != 0) {
        var pop = x % 10
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
        if (rev > INT_MAX / 10 || (rev == INT_MAX / 10 && pop > 7)) return 0 // 判断是否rev将会超过32位整数的范围
        if (rev < INT_MIN / 10 || (rev == INT_MIN / 10 && pop < -8)) return 0
        rev = rev * 10 + pop
    }
    return rev
}

var x = -123

console.log(reverse(x))