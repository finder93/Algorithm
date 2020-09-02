/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) { // 暴力求解，求所有子字符串，判断是否为回文，返回最长回文子串
//     var i = s.length,
//         j = 0,
//         l = 0
//     var substring = ''
//     var maxSubstring = []
//     var isPalindrome = function (s) {
//         var i = 0,
//             j = s.length - 1
//         while (s[i] === s[j] && i <= s.length / 2) {
//             i++
//             j--
//         }
//         if (i === parseInt(s.length / 2) + 1) return s
//         else return false
//     }

//     while (i > 0) {
//         j = 0
//         while (j <= s.length - i) {
//             substring = s.substring(j, j + i)
//             // console.log(substring)
//             if (isPalindrome(substring)) {
//                 if (substring.length >= l) {
//                     l = substring.length
//                     maxSubstring.push(substring)
//                 }
//             }
//             j++
//         }
//         i--
//     }
//     return {
//         length: l,
//         substr: maxSubstring
//     }
// };


// function longestPalindrome(s) { // 中心拓展法
//     if (s == null || s.length < 1) return "";
//     var start = 0,
//         end = 0;

//     function expandAroundCenter(s, left, right) { // 以第 i 个字符作为中心去拓展，返回回文长度
//         L = left, R = right;
//         while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
//             L--;
//             R++;
//             // console.log('L=', L, 'R=', R)
//         }
//         return R - L - 1;
//     }
//     for (var i = 0; i < s.length; i++) {
//         var len1 = expandAroundCenter(s, i, i);
//         var len2 = expandAroundCenter(s, i, i + 1);
//         // console.log('len1=', len1, 'len2=', len2)
//         var len = Math.max(len1, len2);
//         if (len > end - start) {
//             start = i - parseInt((len - 1) / 2);
//             end = i + parseInt(len / 2);
//         }
//         // console.log('start=', start, 'end=', end)
//     }
//     return s.substring(start, end + 1);
// }

function longestPalindrome(s) { // 马拉车法1
    if (s.length == 0 || s.length == 1) return s
    var N = 2 * s.length + 1,
        C = 1, // centerPosition 
        R = 2, // centerRightPosition 
        i = 0, // currentRightPosition 
        iMirror = 0, // currentLeftPosition
        maxLPSLength = 0, // 最长回文长度S
        maxLPSCenterPosition = 0,
        start = -1,
        end = -1,
        diff = -1,
        L = []
    L[0] = 0
    L[1] = 1

    for (i = 2; i < N; i++) {
        iMirror = 2 * C - i
        L[i] = 0
        diff = R - i
        if (diff > 0)
            L[i] = Math.min(L[iMirror], diff)
        while (
            ((i + L[i] < N) && (i - L[i] > 0)) &&
            (((i + L[i] + 1) % 2 == 0) || (s[parseInt((i + L[i] + 1) / 2)] == s[parseInt((i - L[i] - 1) / 2)]))
        ) {
            L[i]++
        }
        if (L[i] > maxLPSLength) {
            maxLPSLength = L[i]
            maxLPSCenterPosition = i
        }
        if (i + L[i] > R) {
            C = i
            R = i + L[i]
        }
        start = parseInt((maxLPSCenterPosition - maxLPSLength) / 2)
        end = start + maxLPSLength - 1
    }
    return s.substring(start, end + 1)
}

function longestPalindrome(s) { // 马拉车法2
    if (s.length == 0 || s.length == 1) return s
    let s_new = '#' + s.split('').join('#') + '#'
    var radius = [1, 2]
    var R = -1
    var c = -1
    var max = -1
    var maxPosit = -1
    for (var i = 0; i < s_new.length; i++) {
        radius[i] = R > i ? Math.min(radius[2 * c - i], R - i + 1) : 1
        while (i + radius[i] < s_new.length && i - radius[i] > -1) {
            if (s_new[i - radius[i]] == s_new[i + radius[i]]) {
                radius[i]++
            } else {
                break
            }
        }
        if (i + radius[i] > R) {
            R = i + radius[i] - 1
            c = i
        }
        if (max < radius[i]) {
            max = radius[i]
            maxPosit = i
        }
    }
    return s_new.substring(maxPosit - max + 1, maxPosit + max).split('#').join('').trim()
}


var s = 'abcba'
var s1 = "cbbc"
var s2 = "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"
var s3 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
var s4 = 'babad'
var s5 = 'ccc'
var s6 = "cbbd"
// console.log(s[0])
console.log(longestPalindrome(s6))