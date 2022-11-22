const repeatString = function(text, repeatTimes) {
    let output = ""

    if (repeatTimes < 0) {
        return "ERROR"
    }

    for (let i = 0; i < repeatTimes; i++) {
        output += text
    }

    return output
};

// Do not edit below this line
module.exports = repeatString;
