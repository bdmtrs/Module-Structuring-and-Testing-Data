let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


/*
  a) There are 5 function calls:
      line 4: Number() and replaceAll();
      line 5: Number() and replaceAll();
      line 10: console.log()

  b) The error comes from line 5 - there is no comma between two arguments in replaceAll("," ""), so Node.js throws a SyntaxError. It can be fixed by adding the missing comma.

  c) Variable reassignment statements are at lines 4 and 5.

  d) Variable declarations are at lines 1, 2, 7 and 8.

  e) Number(carPrice.replaceAll(",", "")) first removes all commas from the string (so "10,000" becomes "10000"), and then converts the result into a number (10000). The purpose is to get a real number that can be used in calculations, because Number("10,000") would give NaN.
*/