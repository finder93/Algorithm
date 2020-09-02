/**
 * @param {string} str
 * @return {number}
 */
var romanToInt = function (s) {
    var obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var front = s[i],
            back = s[i + 1];
        if (obj[back] > obj[front]) {
            result -= obj[front];
        } else {
            result += obj[front];
        }
    }
    return result;
};

console.log(romanToInt("IV"));
