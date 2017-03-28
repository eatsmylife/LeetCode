/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {

        } else {
            nums[counter] = nums[i];
            counter++;
        }
    }
    return counter;
};

var result = removeElement([3,2,2,3], 3);
console.log(result);