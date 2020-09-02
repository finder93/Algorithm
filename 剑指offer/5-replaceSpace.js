/**
 * @param {string} s
 * @return {string}
 */

// 调用string类型的API，split()和join()
var replaceSpace = function (s) {
    if (!s) {
        return s;
    }
    if (s.length >= 0 && s.length <= 10000) {
        return s.split(" ").join("%20");
    } else {
        return s;
    }
};

// 利用正则表达式
var replaceSpace = function (s) {
    return s.replace(/\s/g, "%20");
};

var replaceSpace = function (s) {
    if (!s || !s.length) {
        return "";
    }
    let emptyNum = 0,
        chNum = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === " ") {
            ++emptyNum;
        } else {
            ++chNum;
        }
    }
    const length = emptyNum * 2 + chNum;
    const chs = new Array(length);
    // i 是新字符串的下标
    // j 是原字符串的下标
    for (let i = 0, j = 0; j < s.length; ++j) {
        if (s[j] === " ") {
            chs[i++] = "%";
            chs[i++] = "2";
            chs[i++] = "0";
        } else {
            chs[i++] = s[j];
        }
    }
    return chs.join("");
};

// 时间复杂度：O(n)。遍历字符串 s 一遍。
// 空间复杂度：O(n)。额外创建字符数组，长度为 s 的长度的 3 倍。
