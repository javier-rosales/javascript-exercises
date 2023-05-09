const palindromes = function (text) {
    const alphabet = "abcdefghijklmnoprstuvwxzy"
    
    const clearedText = text
                        .toLowerCase()
                        .split("")
                        .filter(letter => alphabet.includes(letter))
                        .join("")
    
    const reversedText = clearedText
                         .split("")
                         .reverse()
                         .join("")
    
    return clearedText === reversedText
};

// Do not edit below this line
module.exports = palindromes;
