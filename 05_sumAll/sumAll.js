const sumAll = function(start, end) {
    res = 0
    if (typeof start != "number" || start < 0 || typeof end != "number" || end < 0) {
        return "ERROR";
    }
    if (!(start < end)) {
        temp = end
        end = start
        start = temp
    }  
    for (let i = start; i <= end ; i++) {
        res = res + i;        
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
