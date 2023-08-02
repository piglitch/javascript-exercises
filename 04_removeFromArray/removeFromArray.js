const removeFromArray = (array, ...restArgs) => {
    for (let i = 0; i < array.length; i++) {
        for(let j=0; j < restArgs.length; j++){
        if (array[i] === restArgs[j]) {
           array.splice(i, 1);
           i--;
        }}                
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
