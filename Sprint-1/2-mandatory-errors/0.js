// This is just an instruction for the first activity - but it is just for human consumption
// We don't want the computer to run these 2 lines - how can we solve this problem?

/*
  The error occurs because these lines are plain text (not valid JavaScript),
  so Node.js cannot parse them and throws a SyntaxError.
  To solve this, the text has to be turned into a comment, so that Node.js ignores it.
*/