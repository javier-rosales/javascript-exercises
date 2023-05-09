const fibonacci = function(member) {
    if (member < 1) return "OOPS"
    const sequence = []
    for (let count = 0; count < member; count++) {
        sequence.push(getMember(sequence))
    }
    return sequence[sequence.length - 1]
}

function getMember(sequence) {
    const length = sequence.length
    if (length === 0 || length === 1) {
        return 1
    }
    return sequence[length - 1] + sequence[length - 2]
}

// Do not edit below this line
module.exports = fibonacci;
