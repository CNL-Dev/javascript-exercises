const repeatString = function(word, num) {
    if(num < 0){
        return "ERROR";
    }

    let repeatedWord = "";

    for(let i = 0; i < num; i++){
        repeatedWord = repeatedWord.concat("", word);
    }

    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
