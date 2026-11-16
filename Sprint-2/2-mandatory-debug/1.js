// Predict and explain first...
/*
  Prediction: the program will print "The sum of 10 and 32 is undefined",
  because "return;" ends the function before a + b is calculated.
*/

/*
  function sum(a, b) {
    return;
    a + b;
  }

  console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

  "return;" exits "sum" function right away and returns undefined. The line "a + b;" comes after it, so it is never executed.
*/

// Finally, correct the code to fix the problem
/*
  Now "sum" returns a + b, so the result is inserted into the string.
*/

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
