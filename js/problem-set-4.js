/*
 * Hello. 2 points.
 */

function hello() {

  // WRITE YOUR EXERCISE 1 CODE HERE
  var p = document.getElementById("output1");
	p.innerHTML = "Hello, AP Computer Science Principles!";
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  // WRITE YOUR EXERCISE 2 CODE HERE
  name = prompt("Enter your name : ", "Your name here ")
  var p = document.getElementById("output2");
  p.innerHTML = ("Hello, " + name + "!");

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
  var fahr = ((cels * 9/5 + 32).toFixed(2));
  var p = document.getElementById("output3");
  p.innerHTML = (cels + " degrees Celsius equals " + fahr + " degrees Fahrenheit.");
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
  var cels = (((fahr - 32) * 5/9).toFixed(2));
  var p = document.getElementById("output4");
  p.innerHTML = (fahr + " degrees Fahrenheit equals " + cels + " degrees Celsius.");
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {
  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  let amountMiles = (inches - inches % 63360)/(63360);
  let amountYards = (inches - amountMiles * 63360 - inches % 36)/(36);
  let amountFeet = (inches - amountMiles * 63360 - amountYards * 36 - inches % 12)/(12);
  let amountInches = (inches % 12);
  var p = document.getElementById("output5");
  p.innerHTML = `Miles: ${amountMiles}<br>Yards: ${amountYards}<br>Feet: ${amountFeet}<br>Inches: ${amountInches}`;
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
  let amountKilometers = (centimeters - centimeters % 100000)/(100000);
  let amountMeters = (centimeters - centimeters % 100 - amountKilometers * 100000)/(100);
  let amountCentimeters = (centimeters % 100);
  let p = document.getElementById("output6");
  p.innerHTML = `Kilometers: ${amountKilometers}<br>Meters: ${amountMeters}<br>Centimeters: ${amountCentimeters}`;
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  let amountGallons = (fluidOunces - fluidOunces % 128)/(128);
  let amountQuarts = (fluidOunces - amountGallons * 128 - fluidOunces % 32)/(32);
  let amountPints = (fluidOunces - amountGallons * 128 - amountQuarts * 32 - fluidOunces % 16)/(16);
  let amountCups = (fluidOunces - amountGallons * 128 - amountQuarts * 32 - amountPints * 16 - fluidOunces % 8)/(8);
  let amountFluidOunces = (fluidOunces % 8);
  var p = document.getElementById("output7");
  p.innerHTML = `Gallons: ${amountGallons}<br>Quarts: ${amountQuarts}<br>Pints: ${amountPints}<br>Cups: ${amountCups}<br>Fluid Ounces: ${amountFluidOunces}`;
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let amountTons = (ounces - ounces % 32000)/(32000);
  let amountPounds = (ounces - amountTons * 32000 - ounces % 16)/(16);
  let amountOunces = (ounces % 16);
  var p = document.getElementById("output8");
  p.innerHTML = `Tons: ${amountTons}<br>Pounds: ${amountPounds}<br>Ounces: ${amountOunces}`;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  let amountDollars = (pennies - pennies % 100)/(100);
  let amountQuarters = Math.floor((pennies - amountDollars * 100)/25);
  let amountDimes = Math.floor((pennies - amountDollars * 100 - amountQuarters * 25)/10);
  let amountNickels = Math.floor((pennies - amountDollars * 100 - amountQuarters * 25 - amountDimes * 10)/5);
  let amountPennies = (pennies % 5);
  var p = document.getElementById("output9");
  p.innerHTML = `Dollars: ${amountDollars}<br>Quarters: ${amountQuarters}<br>Dimes: ${amountDimes}<br>Nickels: ${amountNickels}<br>Pennies: ${amountPennies}`;
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE
  changeQuarters = (amount * 100 - ((amount * 100) % 25))/(25);
  changeDimes = ((amount * 100 - changeQuarters * 25) - ((amount * 100 - changeQuarters * 25)) % 10)/(10);
  changeNickels = (amount * 100 - changeQuarters * 25 - changeDimes * 10 - (amount * 100 - changeQuarters * 25 - changeDimes * 10) % 5)/(5);
  changePennies = Math.floor(((amount * 100) % 5));
  changeAnswer = changeQuarters + changeDimes + changeNickels + changePennies;
  var p = document.getElementById("output10");

  if (changeAnswer == 1) {
    p.innerHTML = changeAnswer + " coin.";
  }
  else {
    p.innerHTML = changeAnswer + " coins."
  }
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
