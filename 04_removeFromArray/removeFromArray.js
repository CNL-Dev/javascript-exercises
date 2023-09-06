const removeFromArray = function(inputArray, ...itemsToRemove) {
    const filteredArray = [];

    inputArray.forEach((item) => {
        if(!itemsToRemove.includes(item)){
            filteredArray.push(item);
        }
    });

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
