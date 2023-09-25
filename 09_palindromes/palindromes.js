const palindromes = function (inputString) {
    let string = inputString.toLowerCase();
    // Removes all punctuation and whitespace
    const filteredString = string.replace(/[^\w\s']|_/g, "")
                                 .replace(/\s+/g, "");

    function reverseString(string) {
        let reversedString = "";
        for(let i = string.length - 1; i > -1; i--){
            reversedString += string.charAt(i);
        }
        console.log(reversedString);
        return reversedString;
    }

    return filteredString == reverseString(filteredString);
};

// Do not edit below this line
module.exports = palindromes;
