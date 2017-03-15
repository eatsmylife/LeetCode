var convert = function (s, numRows) {
    var resultRows = {};
    var result = "";
    var cycle = numRows * 2 - 2;
    if (numRows < 2) {
        return s;
    }
    for (let i = 0; i < numRows; i++) {
        resultRows[i] = [];
    }
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        let remainder = i % cycle;
        if (remainder < numRows) {
            resultRows[remainder].push(s[i]);
        } else {
            resultRows[cycle - remainder].push(s[i]);
        }
    }
    for (let i = 0; i < numRows; i++) {
        result += resultRows[i].join('');
    }
    return result;
};

var result = convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);
console.log(result);