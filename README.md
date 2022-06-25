# 03 JavaScript: Password Generator

# Project Description
This password generator works with vanilla JS and a simple HTML setup to display information to the page. By using a series of checks before the full password is generated, we can confirm particular password specifications for a user. 

# Using the project

To use the project, navigate to the github pages, click the URL, and click the generate password button on the browser. A series of confirmation boxes will appear to gather the prefered specifications of your password, after which, your password will display in the text box. There is not currently an option to save displayed passwords, so if you'd like to save it, be sure to do so externally!

# Creating the project

Through this project, I worked on JS logic, for loops, and worked with strings. The JS file begins by listing a series of global veriables with each of our potential password inclusions. We also list two empty strings. The final 'password' that will be returned, and a temp variable that will recieve the alphabet, lowercase, numbers, and special variabeles depending on user responses.

The first function, 'handleClick,' starts by displaying a series of confirmations. Each asks for the inclusion of a new variable, and returns a boolean value. Those booleans are then stored and placed into simple if statements that will add the desired strings on a true value.

Loop, the second function, then guarantees that each chosen inclusion is present by pulling a random index directly fromeach respective string, while the final loop adds the rest of the password from a random selection of indexes in the 'temp' string. 

Finally, the shuffleMe function shuffles the password result to be sure the password is never in the same order. This final function came in response to the manner of confirming the variable types, as they would always retain their order of lowercase, uppercase, number, special character. It adds an extra layer of security onto any password made with the program.