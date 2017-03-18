var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 9) return true;
    var num = x;
    var reversed = 0;
    while (x !== 0) {
        reversed = reversed * 10 + x % 10
        x = parseInt(x/10);
    }
    if (reversed === num) 
        return true;
    else
        return false;
};

var result = isPalindrome(1212325);
console.log(result);