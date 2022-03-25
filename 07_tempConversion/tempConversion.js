const ftoc = function(temp) {
    let answer = (temp - 32) * (5 / 9);
    answer = Math.round(answer * 10) / 10;
    return answer;
};

const ctof = function(temp) {
  let answer = (temp * (9/5)) + 32;
  answer = Math.round(answer * 10) / 10;
  return answer;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
