/**
 * @param {string} s 
 * @param {string} p 
 * @return {boolean}
 */
// var isMatch = function (s, p) { // 暴力递归
//     if (!p) return !s
//     var first_match = s && ((p[0] == s[0]) || (p[0] == '.'))
//     if (p.length >= 2 && p[1] == '*') { // 发现 '*' 通配符
//         return isMatch(s, p.substring(2)) ||
//             (first_match && isMatch(s.substring(1), p))
//         // 解释：如果发现有字符和 '*' 结合，
//         // 或者匹配该字符 0 次，然后跳过该字符和 '*'
//         // 或者当 p[0] 和 s[0] 匹配后，移动 s
//     } else
//         return first_match && isMatch(s.substring(1), p.substring(1)) // 未发现 '*' 通配符
// };

var isMatch = function (s, p) { // 动态规划
    if (s == null || p == null) {
        return false;
    }
    var dp = []
    for (var i = 0; i <= s.length; i++) {
        dp[i] = new Array(p.length + 1).fill(false)
    }

    dp[0][0] = true; //dp[i][j] 表示 s 的前 i 个是否能被 p 的前 j 个匹配

    for (var i = 0; i < p.length; i++) { // here's the p's length, not s's
        if (p[i] == '*' && dp[0][i - 1]) {
            dp[0][i + 1] = true; // here's y axis should be i+1
        }
    }

    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < p.length; j++) {
            if (p[j] == '.' || p[j] == s[i]) { //如果是任意元素 或者是对于元素匹配
                dp[i + 1][j + 1] = dp[i][j];
            }
            if (p[j] == '*') {
                if (p[j - 1] != s[i] && p[j - 1] != '.') { //如果前一个元素不匹配 且不为任意元素

                    dp[i + 1][j + 1] = dp[i + 1][j - 1];
                } else {
                    dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);
                    /*
                    dp[i][j] = dp[i-1][j] // 多个字符匹配的情况	
                    or dp[i][j] = dp[i][j-1] // 单个字符匹配的情况
                    or dp[i][j] = dp[i][j-2] // 没有匹配的情况
                     */
                }
            }
        }
    }
    return dp[s.length][p.length];
};

var s = "aab"

var p = "c*a*b"

console.log(isMatch(s, p))