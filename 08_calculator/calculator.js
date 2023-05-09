const add = function(number1, number2) {
	return number1 + number2
};

const subtract = function(number1, number2) {
	return number1 - number2
};

const sum = function(numbers) {
	let result = 0
  numbers.forEach(number => result += number)
  return result
};

const multiply = function(numbers) {
  let result = 1
  numbers.forEach(number => result *= number)
  return result
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(number) {
	if (number === 0) return 1
  let result = number
  for(number; number > 1; number--) {
    result *= number - 1
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
