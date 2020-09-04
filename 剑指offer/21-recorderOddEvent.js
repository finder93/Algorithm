// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4]
// 注：[3,1,2,4] 也是正确的答案之一。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var recorderOddEvent = function (nums) {
    if (nums === null) return 0;
    if (!nums.length) return nums;

    // let odds = [];
    // let events = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if ((nums[i] & 1) === 1) odds.push(nums[i]);
    //     if ((nums[i] & 1) === 0) events.push(nums[i]);
    // }
    // nums = odds.concat(events);

    // 双指针法
    // p1指向数组的第一个数字，它只向后移
    // p2指向数组的最后一个数字，它只向前移
    // 两个指针相遇之前，p1 < p2
    // 如果p1指向的数字为偶数，p2指向的数字为奇数，则交换这两个数字
    let p1 = 0;
    let p2 = nums.length - 1;
    while (p1 < p2) {
        while ((nums[p1] & 1) !== 0 && p1 < p2) {
            p1++;
        }
        while ((nums[p2] & 1) !== 1 && p1 < p2) {
            p2--;
        }
        if (p1 < p2) [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
    }

    return nums;
};

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(recorderOddEvent(nums));
