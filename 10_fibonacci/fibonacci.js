const fibonacci = function(inputNum) {
    // Converts string to number if possible
    let num = +inputNum;
    // Base cases
    if(num < 0) return "OOPS";
    if(num <= 1) return num;

    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
