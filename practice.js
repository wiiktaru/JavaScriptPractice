// Parameters and arguments
// Calclulates how many days, weeks and months we have left if we life until 90 years old
function remainingTime(age) {
  var remainingTime = 90 - age;

  var days = remainingTime * 365;
  var weeks = remainingTime * 52;
  var months = remainingTime * 12;

  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );
}
//remainingTime(56);

//Outputs and return values
//Bmi calculator that takes weight and height as an input and returns bmi value as an output value
function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);

  bmi = Math.floor(bmi);

  return bmi;
}

console.log(bmiCalculator(65, 1.8));
