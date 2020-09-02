/* 查找两个数组的中位数 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var n = 0;
    var result = [];
    var i = 0,
        j = 0,
        midNum = 0;
    var length =
        (nums1.length + nums2.length) % 2 == 0
            ? (nums1.length + nums2.length) / 2 + 1
            : Math.ceil((nums1.length + nums2.length) / 2);
    while (n < length) {
        if (
            nums1[i] < nums2[j] ||
            (nums1[i] !== undefined && nums2[j] == undefined)
        ) {
            result.push(nums1[i]);
            console.log(result, "i");
            i++;
        } else {
            result.push(nums2[j]);
            j++;
            console.log(result, "j");
        }
        n++;
    }
    midNum =
        (nums1.length + nums2.length) % 2 == 0
            ? (result[result.length - 1] + result[result.length - 2]) / 2
            : result[result.length - 1];
    return midNum;
};
var nums1 = [1, 23],
    nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
