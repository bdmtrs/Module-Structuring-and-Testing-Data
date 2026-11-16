// Predict and explain first...

// Predict the output of the following code:
/*
  Prediction: the program will print the last digit of 103 (which is 3) in all three lines, because "getLastDigit" has no parameter and always uses the global "num".
*/

/*
  const num = 103;

  function getLastDigit() {
    return num.toString().slice(-1);
  }

  console.log(`The last digit of 42 is ${getLastDigit(42)}`);
  console.log(`The last digit of 105 is ${getLastDigit(105)}`);
  console.log(`The last digit of 806 is ${getLastDigit(806)}`);

  "getLastDigit" has no parameter, so the arguments 42, 105 and 806 are ignored.
  The function always uses the global "num" (103).
*/

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

/*
  Now "getLastDigit" has a parameter "num", so it uses the number passed to it.
  The global "num" is removed because it is no longer needed.
*/

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
