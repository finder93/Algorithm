/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {}; // js中对象的key-value就是哈希结构存储
    for (let i = 0; i < nums.length; i++) {
        console.log(hash[target - nums[i]]);
        if (hash[target - nums[i]] != undefined)
            return [hash[target - nums[i]], i];
        // 哈希表中通过key(target-nums[i])进行查找的时间复杂度为O(1), 而双层for循环的时间复杂度为O(n^2)
        hash[nums[i]] = i; // 在hash对象中关联key-value，对应数组中的value-index
        // console.log(hash);
    }
};
var nums = [2, 2, 4, 2, 2];
var target = 6;
console.log(twoSum(nums, target));
