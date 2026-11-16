function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// Answer: pad() will be called 3 times: for hours, minutes and seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// Answer: "num" is 0, because "totalHours" is 0.

// c) What is the return value of pad is called for the first time?
// Answer: the return value is "00" (padStart() adds a zero to reach 2 characters).

// d) What is the value assigned to num when pad is called for the last time in this program? Explain your answer
// Answer: "num" is 1 (the last call is pad(remainingSeconds) and "remainingSeconds" is 61 % 60 = 1).

// e) What is the return value assigned to num when pad is called for the last time in this program? Explain your answer
// Answer: the return value is "01" (1 becomes the string "1", and padStart() adds a zero to reach 2 characters).
