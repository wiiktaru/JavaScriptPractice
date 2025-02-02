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

//Outputs and return values & condition logic
//Bmi calculator that takes weight and height as an input and returns bmi value as an output value
function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);

  bmi = bmi.toFixed(2);

  var result;

  if (bmi < 18.5) {
    result = "Your bmi is " + bmi + ", so you are underweight.";
  } else if (bmi <= 24.9) {
    result = "Your bmi is " + bmi + ", so you have normal weight.";
  } else {
    result = "Your bmi is " + bmi + ", so you are overweight.";
  }

  return result;
}

//console.log(bmiCalculator(65, 1.8));
//console.log(bmiCalculator(102, 1.8));
//console.log(bmiCalculator(50, 1.8));

//Leap year challenge
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    var result = "leap year";
    return result;
  } else {
    var result = "not a leap year";
    return result;
  }
}
//console.log(isLeapYear(2019));

// Arrays
//Will select a random name from array to pay lunches
var names = ["Keijo", "Kalevi", "Pentti"];

function whoPay(names) {
  var random = Math.random();
  random = random * names.length;
  random = Math.floor(random);

  var result = names[random] + " is paying.";

  return result;
}
//console.log(whoPay(names));

// Control statements - while loop
//
var count = 99;

function beerBottles() {
  while (count > 1) {
    console.log(
      count + " bottles of beer on the wall, " + count + " bottles of beer."
    );
    console.log(
      "Take on down and pass it around, " +
        count +
        " bottles of beer on the wall"
    );

    count--;
  }

  console.log(
    count + " bottles of beer on the wall, " + count + " bottles of beer."
  );
  console.log(
    "Take on down and pass it around, no more bottles of beer on the wall"
  );

  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log(
    "Go to the store and buy some more, 99 bottles of beer on the wall"
  );
}

beerBottles();
