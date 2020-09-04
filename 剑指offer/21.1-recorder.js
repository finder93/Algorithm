// 对21题的逻辑框架抽象
// 将整个函数解耦成两个部分：（1）判断数字应该位于数组前半部还是后半部的标准；（2）拆分数组的操作
// 解耦提高代码的重用性，为功能拓展提供遍历

/**
 * @param {number[]} nums
 * @param {funciton} standard 判断数字应该位于数组前半部还是后半部的标准
 * @return {number[]}
 */
var recorder = function (nums, fn) {
    if (nums === null) return 0;
    if (!nums.length) return nums;

    let p1 = 0;
    let p2 = nums.length - 1;
    while (p1 < p2) {
        while (!fn(nums[p1]) && p1 < p2) {
            p1++;
        }
        while (fn(nums[p2]) && p1 < p2) {
            p2--;
        }
        if (p1 < p2) [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
    }

    return nums;
};
var standard = function (n) {
    // 判断是否为偶数
    return (n & 1) === 0;
};

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(recorder(nums, standard));
