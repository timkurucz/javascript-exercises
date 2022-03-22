const sumAll = function(num1, num2) {
    let lowEnd;
    let highEnd;
    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number"){
        return "ERROR";
    }
    else if (num1 > num2){
        lowEnd = num2;
        highEnd = num1;
    } else {
        lowEnd = num1;
        highEnd = num2;
    }

    const arr = [];
    for (let i = lowEnd; i <= highEnd; i++){
        arr.push(i);
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
