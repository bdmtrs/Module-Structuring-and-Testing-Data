const hourClockTime24 = "20:53";
const hourClockTime12 = "08:53";

console.log(hourClockTime12);
console.log(hourClockTime24);

/*
  The error is "SyntaxError: Invalid or unexpected token."
  It occurs because variable names in JavaScript cannot start with a digit (and both original names started with a number).
  To solve this the variables have to be renamed so that the names start with
  a letter, an underscore (_) or a dollar sign ($).
*/
