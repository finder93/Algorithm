/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function (s, numRows) { 
//     if (s.length == 0 || s.length == 1 || numRows == 1) return s
//     var result = []
//     var index = 0 // 在result数组中的位置
//     var numCycle = 2 * numRows - 2 // 重复区域的字符长度
//     var numColumns = parseInt(s.length / numCycle) * (numRows - 1) +
//         (s.length % numCycle >= numRows ? (s.length % numCycle - numRows + 1) : 0) // 列数
//     var zoneNum // 重复区域的编号
//     var zoneId // 重复区域里的小编号
//     var zoneFirstId // 重复区域里第一个
//     // console.log(numColumns)

//     for (var i = 0; i < s.length; i++) {
//         zoneNum = parseInt(i / numCycle) // 重复区域的编号
//         zoneId = i % numCycle // 重复区域里的小编号
//         // console.log(zoneId)
//         zoneFirstId = zoneNum * (numRows - 1) // 重复区域里第一个

//         if (zoneId < numRows) { // 此时 zoneId即为所在行号
//             index = zoneId * (numColumns + 1) + zoneFirstId
//         } else {
//             index = index - numColumns
//         }
//         result[index] = s[i]
//         // console.log(s[i], i, index, zoneId, zoneFirstId, zoneNum)
//     }

//     return result.join('')
// };
var convert = function (s, numRows) { // 从左到右遍历 s 的每个字符，计算其所在 Z 字排列的行号
    if (s.length == 0 || numRows == 1 || s.length <= numRows) return s
    var rows = []
    var rowsDirect = true
    var rowId = 0
    var minRows = Math.min(s.length, numRows)
    var result = ''

    for (var i = 0; i < minRows; i++) rows[i] = ''

    for (var j = 0; j < s.length; j++) {
        // console.log(rowsDirect, rowId)
        rows[rowId] += s[j]
        rowId = rowsDirect ? rowId + 1 : rowId - 1
        if ((rowId == (minRows - 1) && rowsDirect) || (rowId == 0 && !rowsDirect)) rowsDirect = !rowsDirect
    }
    for (var k = 0; k < rows.length; k++) {
        result += rows[k]
    }
    return result
}

var s = "LEETCODEISHIRING"
var ss = "LDREOEIIECIHNTSG"
var a = 'a'
var numRows = 4
console.log(convert(s, numRows))