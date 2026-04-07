This is a learning project created with the help of AI tools in Visual Studio Code. Some bugs are intentionally left in the source code so I can practice debugging and fixing issues.

### Learning Journal – Day 1 (Fixing Data Logic)

Today, I worked on the Expense Tracker application and focused on fixing data-related issues.

I noticed that the total amount was incorrect when adding multiple expenses. After checking the code, I realized that the amount was being stored as a string instead of a number.

This caused incorrect calculations when summing values. For example, "100" + "200" resulted in "100200" instead of 300.

To fix this, I converted the amount input into a number before saving it to the state.

I also added a simple validation to prevent empty inputs from being submitted.

From this task, I learned:

* The importance of correct data types in JavaScript
* How React state depends on proper data handling
* Small mistakes in data types can cause major logic errors

After fixing these issues, the total calculation worked correctly.