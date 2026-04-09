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

---

### Learning Journal – Day 2 (Fixing List Rendering Bug)

Today, I focused on fixing an issue in the Expense Tracker related to how the list of expenses was rendered.

Previously, I used the array index as the key when rendering the list. This caused problems when deleting items, as the UI did not update correctly and sometimes displayed incorrect data.

After reviewing the issue, I learned that using index as a key is not reliable because it can change when items are added or removed.

To fix this, I replaced the index with a unique id for each expense item. This ensures that each element has a stable identity, allowing React to render updates correctly.

From this task, I learned:

* Why keys are important in React lists
* The difference between stable and unstable keys
* How incorrect keys can lead to UI bugs

After making this change, the list behaves correctly when adding or deleting items.

---

### Learning Journal – Day 3 (Adding Persistence)

Today, I enhanced the Expense Tracker by adding data persistence using localStorage.

Previously, all expenses were lost when the page was refreshed. This made the application less useful in real-world scenarios.

To solve this, I implemented localStorage to save and load expense data.

I initialized the state by reading from localStorage and used useEffect to update storage whenever the expense list changed.

From this task, I learned:

* How to persist data in the browser
* How to use useEffect for side effects
* How to make an application more practical

After this improvement, the app can now retain data even after refreshing the page.