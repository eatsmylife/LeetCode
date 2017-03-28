/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        } else if (i === nums.length - 1) {
            return i + 1;
        }
    }
};

var result = searchInsert([1], 2);
console.log(result);