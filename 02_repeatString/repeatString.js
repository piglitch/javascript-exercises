
const repeatString = (s, n) => {
    if (n < 0 ){
        return 'ERROR'
    }
    empStr = ''    
    for(i=0; i<n; i++){
        empStr = empStr + s  
    }
    return empStr;
};

// Do not edit below this line
module.exports = repeatString;
