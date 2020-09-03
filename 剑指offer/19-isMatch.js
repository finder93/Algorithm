// 请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。
// 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

// 输入:
// s = "aa"
// p = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。

// 输入:
// s = "aa"
// p = "a*"
// 输出: true
// 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

// 输入:
// s = "ab"
// p = ".*"
// 输出: true
// 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

// 输入:
// s = "aab"
// p = "c*a*b"
// 输出: true
// 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。

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

var isMatch = function (s, p) {
    // 动态规划
    if (s == null || p == null) {
        return false;
    }
    var dp = [];
    for (var i = 0; i <= s.length; i++) {
        dp[i] = new Array(p.length + 1).fill(false);
    }

    dp[0][0] = true; //dp[i][j] 表示 s 的前 i 个是否能被 p 的前 j 个匹配

    for (var i = 0; i < p.length; i++) {
        // here's the p's length, not s's
        if (p[i] == "*" && dp[0][i - 1]) {
            dp[0][i + 1] = true; // here's y axis should be i+1
        }
    }

    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < p.length; j++) {
            if (p[j] == "." || p[j] == s[i]) {
                //如果是任意元素 或者是对于元素匹配
                dp[i + 1][j + 1] = dp[i][j];
            }
            if (p[j] == "*") {
                if (p[j - 1] != s[i] && p[j - 1] != ".") {
                    //如果前一个元素不匹配 且不为任意元素

                    dp[i + 1][j + 1] = dp[i + 1][j - 1];
                } else {
                    dp[i + 1][j + 1] =
                        dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1];
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

var s = "aab";

var p = "c*a*b";

console.log(isMatch(s, p));
