// Predict and explain first...
/*
  Prediction: the program will print 320 and then "The result of multiplying 10 and 32 is undefined", because multiply prints the result but does not return it.
*/

/*
  function multiply(a, b) {
    console.log(a * b);
  }

  console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

  "multiply" prints the result with console.log but does not return it,
  so the function returns undefined, and that is what goes into the string.
*/

// Finally, correct the code to fix the problem
/*
  Now "multiply" returns a * b instead of printing it, so the result is inserted into the string.
*/

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
