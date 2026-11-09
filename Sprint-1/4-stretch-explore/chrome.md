Open a new window in Chrome, then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console, invoke the function `alert` with an input string of `"Hello world!"`;

1. What effect does calling the `alert` function have?
   The `alert()` function displays a pop-up dialog with the message "Hello world!" and an "OK" button. The page is paused until the user closes the dialog. The function returns `undefined`.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

2. What effect does calling the `prompt` function have?
   The `prompt()` function displays a pop-up dialog with the message "What is your name?", , a text input field, and "OK" and "Cancel" buttons. The page is paused until the user responds.

3. What is the return value of `prompt`?
   The `prompt()` function returns the entered text as a string if the user clicks "OK", an empty string ("") if the field is empty, or `null` if the user clicks "Cancel". In this case the variable `myName` stores the returned value.
