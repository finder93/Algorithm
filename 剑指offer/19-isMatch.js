// 请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。
// 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

// 输入:
// str = "aa"
// pattern = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。

// 输入:
// str = "aa"
// pattern = "a*"
// 输出: true
// 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

// 输入:
// str = "ab"
// pattern = ".*"
// 输出: true
// 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

// 输入:
// str = "aab"
// pattern = "c*a*b"
// 输出: true
// 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。

/**
 * @param {string} str
 * @param {string} pattern
 * @return {boolean}
 */
// var isMatch = function (str, pattern) { // 暴力递归
//     if (!pattern) return !str
//     var first_match = str && ((pattern[0] == str[0]) || (pattern[0] == '.'))
//     if (pattern.length >= 2 && pattern[1] == '*') { // 发现 '*' 通配符
//         return isMatch(str, pattern.substring(2)) ||
//             (first_match && isMatch(str.substring(1), pattern))
//         // 解释：如果发现有字符和 '*' 结合，
//         // 或者匹配该字符 0 次，然后跳过该字符和 '*'
//         // 或者当 pattern[0] 和 str[0] 匹配后，移动 str
//     } else
//         return first_match && isMatch(str.substring(1), pattern.substring(1)) // 未发现 '*' 通配符
// };

// var isMatch = function (str, pattern) {
//     // 动态规划
//     if (str == null || pattern == null) {
//         return false;
//     }
//     var dp = [];
//     for (var i = 0; i <= str.length; i++) {
//         dp[i] = new Array(pattern.length + 1).fill(false);
//     }

//     dp[0][0] = true; //dp[i][j] 表示 str 的前 i 个是否能被 pattern 的前 j 个匹配

//     for (var i = 0; i < pattern.length; i++) {
//         // here'str the pattern'str length, not str'str
//         if (pattern[i] == "*" && dp[0][i - 1]) {
//             dp[0][i + 1] = true; // here'str y axis should be i+1
//         }
//     }

//     for (var i = 0; i < str.length; i++) {
//         for (var j = 0; j < pattern.length; j++) {
//             if (pattern[j] == "." || pattern[j] == str[i]) {
//                 //如果是任意元素 或者是对于元素匹配
//                 dp[i + 1][j + 1] = dp[i][j];
//             }
//             if (pattern[j] == "*") {
//                 if (pattern[j - 1] != str[i] && pattern[j - 1] != ".") {
//                     //如果前一个元素不匹配 且不为任意元素

//                     dp[i + 1][j + 1] = dp[i + 1][j - 1];
//                 } else {
//                     dp[i + 1][j + 1] =
//                         dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1];
//                     /*
//                     dp[i][j] = dp[i-1][j] // 多个字符匹配的情况
//                     or dp[i][j] = dp[i][j-1] // 单个字符匹配的情况
//                     or dp[i][j] = dp[i][j-2] // 没有匹配的情况
//                      */
//                 }
//             }
//         }
//     }
//     return dp[str.length][pattern.length];
// };

// 动态规划
var isMatch = function (str, pattern) {
    let n = str.length;
    let m = pattern.length;
    let f = []; // f[i][j] 代表 str 的前 i 个和 pattern 的前 j 个能否匹配
    for (let i = 0; i < n + 1; i++) f[i] = new Array(m + 1).fill(0); // f初始都为 0

    for (let i = 0; i <= n; i++) {
        // 表示str的第i个字符
        for (let j = 0; j <= m; j++) {
            // j表示pattern的第j个字符
            //分成空正则和非空正则两种
            if (j == 0) {
                f[i][j] = i == 0;
            } else {
                //非空正则分为两种情况 * 和 非*
                if (pattern.charAt(j - 1) != "*") {
                    if (
                        i > 0 &&
                        (str.charAt(i - 1) == pattern.charAt(j - 1) ||
                            pattern.charAt(j - 1) == ".")
                    ) {
                        f[i][j] = f[i - 1][j - 1];
                    }
                } else {
                    //碰到 * 了，分为看和不看两种情况
                    //不看
                    if (j >= 2) {
                        f[i][j] |= f[i][j - 2];
                    }
                    //看
                    if (
                        i >= 1 &&
                        j >= 2 &&
                        (str.charAt(i - 1) == pattern.charAt(j - 2) ||
                            pattern.charAt(j - 2) == ".")
                    ) {
                        f[i][j] |= f[i - 1][j];
                    }
                }
            }
        }
    }
    return Boolean(f[n][m]);
};

var str = "aab";
var pattern = "a*b*";

console.log(isMatch(str, pattern));
