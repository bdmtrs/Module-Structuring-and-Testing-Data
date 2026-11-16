// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);

  // Checks if hours and minutes are within valid ranges
  if (hours < 0 || hours > 23 || Number(minutes) < 0 || Number(minutes) > 59) {
    return "Invalid time";
  }

  // Handles midnight (00:00–00:59)
  if (hours === 0) {
    return `12:${minutes} am`;
  }

  if (hours < 12) {
    return `${time} am`;
  }

  if (hours === 12) {
    return `${time} pm`;
  }

  // Converts afternoon hours to 12-hour format with a leading zero
  return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`;
}

// Checks one input against the expected output
function checkTimeOutput(time, targetOutput) {
  const currentOutput = formatAs12HourClock(time);
  console.assert(
    currentOutput === targetOutput,
    `input: ${time}, current output: ${currentOutput}, target output: ${targetOutput}`
  );
}

// Existing tests
checkTimeOutput("08:00", "08:00 am");
checkTimeOutput("23:00", "11:00 pm");

// Midnight is shown as "00:00 am" instead of "12:00 am"
checkTimeOutput("00:00", "12:00 am");

// Midday is shown as "am" instead of "pm"
checkTimeOutput("12:00", "12:00 pm");

// Afternoon hours lack a leading zero, and minutes are replaced with ":00"
checkTimeOutput("13:30", "01:30 pm");
checkTimeOutput("20:45", "08:45 pm");
checkTimeOutput("23:59", "11:59 pm");

// Hours or minutes exceed their valid ranges
checkTimeOutput("24:00", "Invalid time");
checkTimeOutput("12:60", "Invalid time");
