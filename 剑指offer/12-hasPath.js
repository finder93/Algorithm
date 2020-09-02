// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
// 路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
// 如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
// 例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）
// [["a","b","c","e"],
// ["s","f","c","s"],
// ["a","d","e","e"]]
// 但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (
    board === null ||
    word === null ||
    board[0].length < 1 ||
    board.length < 1
  )
    return false;

  let rows = board.length;
  let cols = board[0].length;
  let visited = new Array(rows * cols).fill(true);
  let pathLen = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (existCore(board, rows, cols, row, col, word, pathLen, visited)) {
        return true;
      }
    }
  }
  delete visited;
  return false;
};

/**
 * @param {character[][]} board
 * @param {number} rows
 * @param {number} cols
 * @param {number} row
 * @param {number} col
 * @param {string} word
 * @param {number} pathLen
 * @param {boolean[][]} visited
 * @return {boolean}
 */
var existCore = function (board, rows, cols, row, col, word, pathLen, visited) {
  if (word[pathLen] === undefined) {
    return true;
  }
  let hasPath = false;
  if (
    row >= 0 &&
    row < rows &&
    col >= 0 &&
    col < cols &&
    board[row][col] === word[pathLen] &&
    visited[row * cols + col]
  ) {
    // 当矩阵中坐标为(row,col)的格子和路径字符串中下标为pathLen的字符一样时
    // 从相邻的格子(row,col-1)(row-1,col)(row+1,col)(row,col+1)中去定位路径字符串中下标为pathLen+1的字符
    pathLen++;
    visited[row * cols + col] = false;
    hasPath =
      existCore(board, rows, cols, row, col - 1, word, pathLen, visited) ||
      existCore(board, rows, cols, row - 1, col, word, pathLen, visited) ||
      existCore(board, rows, cols, row, col + 1, word, pathLen, visited) ||
      existCore(board, rows, cols, row + 1, col, word, pathLen, visited);
    if (!hasPath) {
      // 如果相邻的4个格子都没有匹配的字符，则表明当前路径字符串中下标为pathLen的字符，在矩阵中的定位不正确
      // 需要回到前一个字符(pathLen-1)，然后重新定位
      // pathLen--; // 疑似多余
      visited[row * cols + col] = true;
    }
  }
  return hasPath;
};
let str = "";
let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "E"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED";
console.log(exist(board, word));
