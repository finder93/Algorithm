// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
// 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
// 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  if (k < 0 || m < 0 || n < 0) {
    return 0;
  }
  let visited = new Array(m * n).fill(false);

  let count = movingCountCore(m, n, 0, 0, k, visited);

  delete visited;
  return count;
};

/**
 *
 * @param {number} rows
 * @param {number} cols
 * @param {number} row
 * @param {number} col
 * @param {number} threshold
 * @param {boolean[][]} visited
 */
var movingCountCore = function (rows, cols, row, col, threshold, visited) {
  let count = 0;
  if (check(rows, cols, row, col, threshold, visited)) {
    visited[row * cols + col] = true;

    count =
      1 +
      movingCountCore(rows, cols, row - 1, col, threshold, visited) +
      movingCountCore(rows, cols, row, col - 1, threshold, visited) +
      movingCountCore(rows, cols, row + 1, col, threshold, visited) +
      movingCountCore(rows, cols, row, col + 1, threshold, visited);
  }
  return count;
};

// 检测机器人是否能进入坐标为(row,col)的方格
var check = function (rows, cols, row, col, threshold, visited) {
  if (
    row >= 0 &&
    col >= 0 &&
    row < rows &&
    col < cols &&
    !visited[row * cols + col] &&
    getDigitSum(row) + getDigitSum(col) <= threshold
  ) {
    return true;
  }
  return false;
};

// 计算一个数字的位数之和，如123 => 6
var getDigitSum = function (num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(getDigitSum(123));
let m = 2,
  n = 3,
  k = 1;
console.log(movingCount(m, n, k));
