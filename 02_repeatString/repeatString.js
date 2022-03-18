const repeatString = function(string, n) {
    let answer = string;
    if (n == 0) {
        answer = "";
    } else if (n < 0){
        answer = "ERROR";
    } else {
        for (let i = 1; i < n; i++){
            answer = answer + string;
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
