// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

/*
  The error is "ReferenceError: Cannot access 'cityOfBirth' before initialization."
  It occurs because "cityOfBirth" is used in console.log before it is declared. Variables declared with const (or let) cannot be accessed before the line where they are declared.
  To solve this the declaration (const cityOfBirth = "Bolton") must be moved above the console.log line.
*/
