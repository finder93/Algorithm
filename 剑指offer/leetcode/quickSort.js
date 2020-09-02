function quickSort(data, length, start, end) {
  if (start === end) return;
  let index = partition(data, length, start, end);
  console.log(data);
  if (index > start) quickSort(data, length, start, index - 1);
  if (index < end) quickSort(data, length, index + 1, end);
}

function partition(data, length, start, end) {
  // 把数组中的数字分为两个部分，比选择的数字小的移动到数组的左边，比选择数字大的数字移动到数组右边
  // 检验参数
  if (data === null || length <= 0 || start < 0 || end > length)
    console.error("Invalid Parameters");

  let randomInRange = (start, end) =>
    parseInt(Math.random() * (end - start + 1) + start, 10); // 用于生成[start,end]区间内的随机数

  let index = randomInRange(start, end);
  [data[index], data[end]] = [data[end], data[index]]; // 交换下标为数组中index和end的元素

  let small = start - 1; // 用于记录比选中数字data[end]小的元素的下标
  for (index = start; index < end; ++index) {
    // 循环遍历数组
    if (data[index] < data[end]) {
      // 当前数组元素比所选择的数字data[end]小
      ++small;
      if (small != index)
        // 且small和index不相等
        [data[index], data[small]] = [data[small], data[index]]; // 交换下标为small的元素与当前元素，将比选中数字data[end]小的元素，移动到数组左边
    }
  }
  ++small; // small下标加一，此时指向数组中大于选中数字的的部分（第一个元素）
  [data[small], data[end]] = [data[end], data[small]]; // 交换下标为数组中small和end的元素，此时data[small]即为选中的数字，其左边的数字都小于它，其右边的数字都大于它
  return small; // 返回选中数字的下标
}

let arr = [9, 8, 23, 7, 6, 12, 16, 5, 4, 3, 50, 2, 1];
quickSort(arr, arr.length, 0, arr.length - 1);
console.log(arr);
