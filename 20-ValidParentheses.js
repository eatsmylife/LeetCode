/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s) return true;

    var stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else if (s[i] === ")" && stack.indexOf("(") !== -1) {
            stack.pop();
        } else if (s[i] === "]" && stack.indexOf("[") !== -1) {
            stack.pop();
        } else if (s[i] === "}" && stack.indexOf("{") !== -1) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};

var result = isValid("({[]})");
console.log(result);