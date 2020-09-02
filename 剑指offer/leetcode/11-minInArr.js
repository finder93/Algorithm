// 把一个数组最开始的若干个元素搬到数组的末尾，称为数组的旋转
// 输一个递增排序的数组的一个旋转，输出旋转数组的最小元素

function minInSortedArr(numbers) {
  if (numbers === null || numbers.length <= 0) {
    console.error("Invalid Parameters");
    return null;
  }

  let index1 = 0, // 指向前面子数组的第一个元素
    index2 = numbers.length - 1, // 指向后面子数组的最后一元素
    indexMid = index1; // 指向数组的中间元素，初始化为index1，此时numbers为将0个元素旋转的数组，即原数组
  while (numbers[index1] >= numbers[index2]) {
    // 最终第一个指针指向前面子数组的最后一个元素，第二个指针指向后面子数组的第一个元素，此时第二个指针指向数组最小元素
    if (index2 - index1 === 1) {
      indexMid = index2;
      break;
    }

    indexMid = Math.floor((index1 + index2) / 2);

    // 如果第一个指针和第二个指针所指元素和中间元素，三者相等，则只能顺序查找
    if (
      numbers[index1] === numbers[index2] &&
      numbers[index1] === numbers[indexMid]
    ) {
      return minInOrder(numbers, index1, index2);
    }

    if (numbers[indexMid] >= numbers[index1]) {
      // 当中间元素大于第一个指针时，其位于前面的递增子数组，最小元素应位于其后面
      // 修改第一个指针指向
      index1 = indexMid;
    } else if (numbers[indexMid] <= numbers[index2]) {
      // 当中间元素小于第二个指针时，其位于后面的递增子数组，最小元素应位于其前面
      // 修改第一个指针指向
      index2 = indexMid;
    }
  }
  return numbers[indexMid];
}

function minInOrder(numbers, index1, index2) {
  let result = numbers[index1];
  for (let i = index1; i <= index2; i++) {
    if (numbers[i] <= result) result = numbers[i];
  }
  return result;
}

let numbers = [5, 6, 7, 8, 9, 2, 2, 3, 4];
let numbers1 = [1, 0, 1, 1, 1];
let numbers2 = [];
let numbers3 = [1];
console.log(minInSortedArr(numbers));
console.log(minInSortedArr(numbers1));
console.log(minInSortedArr(numbers2));
console.log(minInSortedArr(numbers3));
