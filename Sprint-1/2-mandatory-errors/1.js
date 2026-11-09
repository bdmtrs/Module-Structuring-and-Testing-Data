// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

console.log (age);

/*
  The error is "TypeError: Assignment to constant variable."
  It occurs because "age" is declared with const, so its value cannot be reassigned.
  Line 4 (age = age + 1) tries to change it, which is not allowed.
  To solve this it's necessary to declare "age" with let (instead of const), so that its value can be updated.
*/