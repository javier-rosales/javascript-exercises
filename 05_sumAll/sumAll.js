const sumAll = function(start, end) {
    let result = 0

    if (start < 0 ||
        end < 0 ||
        typeof start !== "number" ||
        typeof end !== "number") {
        return "ERROR"
    } else if (start === end) {
        return start
    } else if (start > end) {
        for (let i = start; i >= end; i--) {
            result += i
        }
    } else {
        for (let i = start; i <= end; i++) {
            result += i
        }
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
