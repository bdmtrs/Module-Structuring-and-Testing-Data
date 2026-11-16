// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  // Removes the trailing "p"
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  // Makes sure there are at least 3 digits ("3" becomes "003")
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // Takes everything except the last 2 digits as pounds
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  // Takes the last 2 digits as pence
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}

console.log(toPounds("399p"));
console.log(toPounds("39p"));
console.log(toPounds("3p"));
console.log(toPounds("1399p"));
