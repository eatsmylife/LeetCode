/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums === null || nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    var counter = 0;
    for (let i = 0; i < nums.length;i++) {
        if (nums[i] === nums[i+1]) {

        } else {
            nums[counter] = nums[i];
            counter++;
        }
    }
    return counter;
};

var result = removeDuplicates([1, 2, 2, 3, 3, 4]);
console.log(result);