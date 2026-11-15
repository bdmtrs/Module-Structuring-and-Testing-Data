// Predict and explain first...
// Why will an error occur when this program runs?
/*
  Prediction: the program will throw an error, because "decimalNumber" is declared twice (as the function parameter and again inside the function with const).
*/

// Try playing computer with the example to work out what is going on
/*
  function convertToPercentage(decimalNumber) {
    const decimalNumber = 0.5;
    const percentage = `${decimalNumber * 100}%`;

    return percentage;
  }
  console.log(decimalNumber);

  The error is "SyntaxError: Identifier 'decimalNumber' has already been declared."
  The parameter is already a variable, so it cannot be declared again with const. Also, console.log(decimalNumber) is outside the function, where the parameter does not exist.
*/

// Finally, correct the code to fix the problem
/*
  Now the extra declaration is removed, and console.log prints the result
  of calling the function with 0.5 as the argument.
*/

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
