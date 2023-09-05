const reverseString = function(inputString) {
    let reversedString = "";

    for(let i = inputString.length; i > -1; i--){
        reversedString = reversedString.concat("",inputString.charAt(i));
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
