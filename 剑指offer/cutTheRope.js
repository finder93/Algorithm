/*  给定一个长度为n的绳子，将其分成m段（m>1）,求m段的乘积最大。 */

// 数学上的描述：给定一个数n，求n = a1 + a2 ... +am, （m>1）在此条件下, s = a1 * a2 * ... * am， 求s最大

/* 暴力递归 */

// 暴力递归就要想到递归三部曲：
// 递归函数的设计和功能：back_track(n); 含义是：求长度为n的数，最后分段后的最大乘积，这里我们不需要关心分成多少段。
// 递归函数的终止条件: 如果n <= 4, 显然back_track(n) = n，初始条件也就是我们不用计算就能得到的。
// 下一步递归：对于长度n，我们需要减少递归参数n，如果第一段为1，显然下一步递归为back_track(n-1)，如果第一段为2， 则下一步递归为
// back_track(n-2)...因为要至少分2段，所以，最后一次可能的情况为最后一段为n-1, 下一步递归为back_track(1)，
// 因此，每一步可能的结果为1 * back_track(n-1), 2 * back_track(n-2), ..., (n-1) * back_track(1)，在n-1种情况中取一个最大值即可。
// 这里我们不用关系back_track(n-1)等的值为多少，因为最终会递归到我们的终止条件，因此绝对是可以求出来。
// 时间复杂度：O(n!)
// 空间复杂度：O(n), 最多分n段，每段长度为1， 所以递归深度为n

function back_track(n) {
    // n <= 4, 表明不分，长度是最大的
    if (n <= 4) {
        return n;
    }

    let ret = 0;
    for (let i = 1; i < n; ++i) {
        ret = Math.max(ret, i * back_track(n - i));
    }
    return ret;
}
function cutRope(number) {
    // number = 2 和 3 时，分 2 段和分 1 段的结果是不一样的，所以需要特判一下
    if (number == 2) {
        return 1;
    } else if (number == 3) {
        return 2;
    }
    return back_track(number);
}
