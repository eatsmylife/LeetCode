var twoSum = function (nums, target) {
    var hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined) {
            return [hash[nums[i]], i]
        } else {
            hash[target - nums[i]] = i;
        }
    }
    return [];
};

var result = twoSum([3, 2, 4], 6);
console.log(result);