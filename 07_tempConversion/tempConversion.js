const convertToCelsius = function(f) {
  let c = (5*(f-32))/9;
  let roundedC = Math.round(c*10)/10;
  return roundedC;
};

const convertToFahrenheit = function(c) {
  let f = c*(9/5) + 32;
  let roundedF = Math.round(f*10)/10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
