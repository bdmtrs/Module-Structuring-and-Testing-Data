const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
  "num" is a random integer between "minimum" and "maximum" (both inclusive), so here between 1 and 100.
  How the expression is evaluated:
  1. (maximum - minimum + 1) is the number of possible values (100).
  2. Math.random() returns a random decimal from 0 up to 1 (1 is not included).
  3. Multiplying by 100 gives a decimal from 0 up to 100 (100 is not included).
  4. Math.floor() rounds it down to a whole number from 0 to 99.
  5. Adding "minimum" shifts the range to 1-100.
*/