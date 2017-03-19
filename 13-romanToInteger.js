var romanToInt = function (s) {
    var sum = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        switch (s[i]) {
            case "I":
                sum += 1;
                break;
            case "V":
                if (s[i - 1] === "I") {
                    sum += 4;
                    i--;
                } else {
                    sum += 5;
                }
                break;
            case "X":
                if (s[i - 1] === "I") {
                    sum += 9;
                    i--
                } else {
                    sum += 10;
                }
                break;
            case "L":
                if (s[i - 1] === "X") {
                    sum += 40;
                    i--;
                } else {
                    sum += 50;
                }
                break;
            case "C":
                if (s[i - 1] === "X") {
                    sum += 90;
                    i--;
                } else {
                    sum += 100;
                }
                break;
            case "D":
                if (s[i - 1] === "C") {
                    sum += 400;
                    i--;
                } else {
                    sum += 500;
                }
                break;
            case "M":
                if (s[i - 1] === "C") {
                    sum += 900;
                    i--;
                } else {
                    sum += 1000;
                }
                break;
        }
    }
    return sum;
};

var romanToInt2 = function (s) {
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var sum = 0;
    for (let i = 0; i < s.length; i++) {
        var v1 = map[s[i]];
        var v2 = map[s[i + 1]];
        if (v2 > v1) {
            sum += v2 - v1;
            i++;
        } else {
            sum += v1;
        }
    }
    return sum;
};

var result = romanToInt2("DCXXI");

console.log(result);