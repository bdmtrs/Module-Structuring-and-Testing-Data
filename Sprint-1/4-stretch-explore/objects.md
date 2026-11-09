## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

**1. What output do you get?**\
 It outputs the built-in log function of the console object.

**2. Now enter just `console` in the Console, what output do you get back?**\
 It returns the `console` object, which contains various methods such as `log()`, `warn()`, `error()` and `assert()`.

**3. Try also entering `typeof console`**\
 It returns `'object'`, which shows that `console` is an object.

Answer the following questions:

**4. What does `console` store?**\
 The `console` object stores a collection of methods used for debugging and displaying information in the browser's developer console.

**5. What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?**\
 The dot (`.`) is the property access operator. It allows us to access the properties and methods of an object. For example, `console.log` accesses the `log` method of the `console` object, while `console.assert` accesses its `assert` method.
