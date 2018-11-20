<!DOCTYPE html>

<html>
  <head>
    <title>Problem Set 4</title>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="css/problem-set-4.css"/>

    <!-- JavaScript -->
    <script type="text/javascript" src="js/problem-set-4.js"></script>
    <script type="text/javascript" src="js/problem-set-4-check-hidden.js"></script>
  </head>
  <body>
    <div class="header">
      <h1>PROBLEM SET 4</h1>
      <hr/>
    </div>

    <div class="exercise" id="exercise1">
      <button onclick="hello()">Hello</button>

      <h3>OUTPUT</h3>
      <div class="output" id="output1">

      </div>

      <br/>

      <h3>RESULT</h3>
      <div class="result" id="result1">

      </div>
    </div>

    <div class="exercise" id="exercise2">
      <button onclick="helloAgain()">Hello, Again</button>

      <h3>OUTPUT</h3>
      <div class="output" id="output2">

      </div>

      <br/>

      <h3>RESULT</h3>
      <div class="result" id="result2">

      </div>
    </div>

    <div class="exercise" id="exercise3">
      <button onclick="celsius()">Celsius</button>

      <h3>OUTPUT</h3>
      <div class="output" id="output3">

      </div>

      <br/>

      <h3>RESULT</h3>
      <div class="result" id="result3">

      </div>
    </div>

    <div class="exercise" id="exercise4">
      <button onclick="fahrenheit()">Fahrenheit</button>

      <h3>OUTPUT</h3>
      <div class="output" id="output4">

      </div>

      <br/>

      <h3>RESULT</h3>
      <div class="result" id="result4">

      </div>
    </div>

    <div class="exercise" id="exercise5">
      <button onclick="inches()">Inches</button>

      <h3>OUTPUT</h3>
      <div class="output" id="output5">

      </div>

      <br/>

      <h3>RESULT</h3>
      <div class="result" id="result5">

      </div>
    </div>

    <div class="exercise" id="exercise6">
      <button onclick="centimeters()">Centimeters</button>

      <h3>OUTPUT</h3>
      <div class="output" id="output6">

      </div>

      <br/>

      <h3>RESULT</h3>
      <div class="result" id="result6">

      </div>
    </div>

    <div class="exercise" id="exercise7">
      <button onclick="fluidOunces()">Fluid Ounces</button>

      <h3>OUTPUT</h3>
      <div class="output" id="output7">

      </div>

      <br/>

      <h3>RESULT</h3>
      <div class="result" id="result7">

      </div>
    </div>

    <div class="exercise" id="exercise8">
      <button onclick="ounces()">Ounces</button>

      <h3>OUTPUT</h3>
      <div class="output" id="output8">

      </div>

      <br/>

      <h3>RESULT</h3>
      <div class="result" id="result8">

      </div>
    </div>

    <div class="exercise" id="exercise9">
      <button onclick="money()">Money</button>

      <h3>OUTPUT</h3>
      <div class="output" id="output9">

      </div>

      <br/>

      <h3>RESULT</h3>
      <div class="result" id="result9">

      </div>
    </div>

    <div class="exercise" id="exercise10">
      <button onclick="change();">Change</button>

      <h3>OUTPUT</h3>
      <div class="output" id="output10">

      </div>

      <br/>

      <h3>RESULT</h3>
      <div class="result" id="result10">

      </div>
    </div>
  </body>
</html>

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

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
