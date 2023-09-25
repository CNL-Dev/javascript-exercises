const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	if(nums.length === 0) return 0;
  let initialSum = 0;

  const totalSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, initialSum);
  return totalSum;
};

const multiply = function(nums) {
  const total = nums.reduce((accumulator, currentValue) => accumulator * currentValue);
  return total;
};

const power = function(num, exponent) {
	let total = num;
  for(let i = 1; i < exponent; i++){
    total *= num;
  }

  return total;
};

const factorial = function(num) {
	if(num === 0 || num === 1) return 1;
  return (num * factorial(num - 1));
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
