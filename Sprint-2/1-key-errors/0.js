// Predict and explain first...
/*
  Prediction: the code will throw an error, because "str" is declared twice (as the function parameter and again inside the function with let).
*/

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
/*
  function capitalise(str) {
    let str = `${str[0].toUpperCase()}${str.slice(1)}`;
    return str;
  }
  
  The error is "SyntaxError: Identifier 'str' has already been declared."
  A parameter is already a variable in the function, so it cannot be declared again with let.
*/

/*
  Now the result of the function is stored in a new variable "capitalisedStr", so the names no longer conflict. The first letter is made uppercase and joined with the rest of the string ("name" becomes "Name").
*/

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

const capitalisedName = capitalise("name");
console.log(capitalisedName);
