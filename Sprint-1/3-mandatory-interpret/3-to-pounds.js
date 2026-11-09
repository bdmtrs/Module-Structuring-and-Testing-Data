// Initialises a string variable with the value "399p"
const penceString = "399p";

// Removes the last character ("p") from the string using substring().
// The result is "399".
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// Adds leading zeros if the string has less than 3 characters, so that at least one digit is specified for pounds and at least two for pence.
// In this case "399" will remain.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// Extracts all characters except the last two, which represent pence.
// The result is "3".
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// Extracts the last two characters of the string, which represent pence.
// The padEnd() method would add trailing zeros if needed (in this case it has no effect).
// The result is "99".
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// Prints the final formatted price in pounds and pence to the console.
// The output is "£3.99".
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
