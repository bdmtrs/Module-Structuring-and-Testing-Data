const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

/*
  a) There are 6 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours and result.

  b) There is 1 function call: console.log(result) on line 10.

  c) The % operator is the remainder operator.
  movieLength % 60 returns the remainder of dividing the total number of seconds by 60 (the seconds left over after all the full minutes are taken out).

  d) On line 4 the remaining seconds are subtracted from the total number of seconds, and the result is divided by 60. This gives the number of full minutes in the movie.

  e) The variable "result" represents the movie length in the format hours:minutes:seconds.
  A better name would be "movieLengthFormatted".

  f) The code will not work correctly for all values of movieLength:
     - It does not add leading zeros (3665 gives "1:1:5" instead of "1:01:05").
     - Negative values give meaningless output (-3665 gives "-1:-1:-5").
     - Decimal values produce decimal seconds (100.5 gives "0:1:40.5").
     - Other edge cases include non-numeric strings, undefined or null values.
*/
