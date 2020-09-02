// 找出数组中重复的数字。

// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
// 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 原地置换
// 从题目描述可以知道，所有数字都在 0 ～ n-1 的范围内。
// 因此不需要额外开辟空间，每次遍历时，检查当前元素是否放在了正确位置上（例如元素 i 应该放在下标为 i 的位置上）。
// 如果放在了正确位置上，那么继续循环。否则：
//     下标为 num 的元素 === num，说明当前元素 num 是重复的，直接返回
//     下标为 num 的元素 !== num，交换当前元素和下标为 num 的元素，将当前元素放入到正确位置上
var findRepeatNumber = function (nums) {
    for (let i = 0; i < nums.length; ++i) {
        //检测下标为i的元素是否放在了位置i上
        let num;
        while ((num = nums[i]) !== i) {
            if (num === nums[num]) {
                return num;
            }
            [nums[i], nums[num]] = [nums[num], nums[i]];
        }
    }
    return -1;
};

// 哈希表;
// var findRepeatNumber = function (nums) {
//     // var hash = {};
//     // for (var i = 0; i < nums.length; i++) {
//     //     if (hash[nums[i]] != undefined) return nums[i];
//     //     hash[nums[i]] = i;
//     // }
//     // return -1;
//     let hash = new Set(); // ES6 新语法
//     for (let i = 0; i < nums.length; i++) {
//         if (hash.has(nums[i])) {
//             return nums[i];
//         } else {
//             hash.add(nums[i]);
//         }
//     }
//     return -1;
// };
// 时间复杂度：O(n);
// 空间复杂度：O(n);
// 缺陷：空间复杂度过高

console.log(findRepeatNumber([1, 3, 2, 3]));
