// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix === null) return null;
    let rows = matrix.length;
    if (rows === 0) return matrix;
    let cols = matrix[0].length;

    let start = 0;
    let result = [];

    // 实现打印矩阵最外围一圈的功能
    var spiralOrderCore = function (matrix, cols, rows, start) {
        let endX = cols - 1 - start; // 终止列号
        let endY = rows - 1 - start; // 终止行号

        // 第一步：从左往右打印一行
        // 第一步总是需要的
        for (let i = start; i <= endX; i++) {
            result.push(matrix[start][i]);
        }
        // 第二步：从上到下打印一列
        // 需要第二步的前提条件，至少有两行 <=> 终止行号endY大于起始行号start
        if (start < endY) {
            for (let i = start + 1; i <= endY; i++) {
                result.push(matrix[i][endX]);
            }
        }
        // 第三步：从右往左打印一行
        // 需要第三步的前提条件，圈内至少有两行两列 <=> 除了终止行号endY大于起始行号start，还要终止列号endX大于起始列号start
        if (start < endY && start < endX) {
            for (let i = endX - 1; i >= start; i--) {
                result.push(matrix[endY][i]);
            }
        }
        // 第四步：从下到上打印一列
        // 需要第四步的前提条件，至少有三行两列 <=> 终止行号endY比起始行号start大2,终止列号endX大于起始列号start
        if (start < endX && start < endY - 1) {
            for (let i = endY - 1; i >= start + 1; i--) {
                result.push(matrix[i][start]);
            }
        }
    };

    while (cols > start * 2 && rows > start * 2) {
        spiralOrderCore(matrix, cols, rows, start);
        start++;
    }

    return result;
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(spiralOrder([[1], [2], [3]]));
