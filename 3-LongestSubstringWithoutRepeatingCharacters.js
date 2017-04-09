/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var longestStr = "";
    var longestCount = 0;
    var currentStr = "";
    var currentCount = 0;

    for (let i = 0; i < s.length; i++) {
        let repeatPos = currentStr.indexOf(s[i]);
        if (repeatPos === -1) {
            currentStr += s[i];
            currentCount++;
            if (currentCount > longestCount) {
                longestCount = currentCount;
                longestStr = currentStr;
            }
        } else {
            currentStr = currentStr.substr(repeatPos + 1) + s[i];
            currentCount = currentStr.length;
        }
    }
    return longestCount;
};

var result = lengthOfLongestSubstring("dvdf");
console.log(result);