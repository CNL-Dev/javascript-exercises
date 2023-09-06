const sumAll = function(num1, num2) {

    if(!(typeof num1 == 'number') || !(typeof num2 == 'number')){
        return 'ERROR';
    }

    let sum = 0;
    let min = 0;
    let max = 0;

    if(num1 >= num2){
        max = num1;
        min = num2;
    }
    else{
        max = num2;
        min = num1;
    }

    if(min < 0){
        return 'ERROR';
    }

    for(let i = min; i < max + 1; i++){
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
