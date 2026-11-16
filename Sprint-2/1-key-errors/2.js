// Predict and explain first BEFORE you run any code...
// this function should square any number but instead we're going to get an error
/*
  Prediction: the code will throw an error, because the number 3 is used as a parameter name, but a parameter must be a variable name, not a value.
*/
/*
  function square(3) {
    return num * num;
  }

  The error is "Uncaught SyntaxError: Unexpected number."
  A function declaration needs parameter names in the parentheses, not values. The value 3 should be passed as an argument when the function is called.
*/

// Finally, correct the code to fix the problem
/*
  Now the parameter is renamed to "num", and console.log() prints the result of square(3).
*/

function square(num) {
  return num * num;
}

console.log(square(3));
