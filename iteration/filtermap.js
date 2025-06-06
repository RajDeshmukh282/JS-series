// filterMap.js
// 📘 Author: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// ➤ .filter() Method
//////////////////////////////////////////////////

/*
Definition:
-----------
The .filter() method creates a new array 
with all elements that pass a test (provided as a function).

It returns only elements where the callback returns true.

SYNTAX:
--------
array.filter((element, index, array) => {
    return condition;
});

USE CASES:
----------
✔ Filtering values
✔ Removing unwanted items
✔ Keeping only items that match a rule
*/

//////////////////////////////////////////////////
// Example: Filter numbers greater than 10
//////////////////////////////////////////////////

const numbers = [5, 12, 8, 130, 44];

const filteredNumbers = numbers.filter(num => num > 10);

console.log("Original numbers:", numbers);
console.log("Filtered numbers ( > 10 ):", filteredNumbers);

//////////////////////////////////////////////////
// ➤ .map() Method
//////////////////////////////////////////////////

/*
Definition:
-----------
The .map() method creates a new array 
with the results of calling a function on every element.

It transforms each element → returns new array.

SYNTAX:
--------
array.map((element, index, array) => {
    return newElement;
});

USE CASES:
----------
✔ Transform array values
✔ Convert array of data to another format
✔ Apply calculation on array
*/

//////////////////////////////////////////////////
// Example: Multiply each number by 2
//////////////////////////////////////////////////

const multipliedNumbers = numbers.map(num => num * 2);

console.log("Original numbers:", numbers);
console.log("Mapped numbers ( * 2 ):", multipliedNumbers);

//////////////////////////////////////////////////
// ➤ Chaining .filter() and .map()
//////////////////////////////////////////////////

/*
You can chain filter().map() to:
✔ First filter the array
✔ Then transform the filtered result
*/

//////////////////////////////////////////////////
// Example: Filter numbers > 10, then multiply by 2
//////////////////////////////////////////////////

const chainedResult = numbers
  .filter(num => num > 10)
  .map(num => num * 2);

console.log("Chained result ( >10 then *2 ): ", chainedResult);

//////////////////////////////////////////////////
// ➤ Common Mistakes
//////////////////////////////////////////////////

/*
❌ .filter() must return true or false
❌ .map() must always return a new value

.filter() changes number of elements
.map() keeps number of elements same (but changes the content)
*/

//////////////////////////////////////////////////
// ➤ Summary
//////////////////////////////////////////////////

/*
.filter() = returns subset of array based on condition
.map()    = returns transformed array based on logic

.filter() → for filtering
.map()    → for transforming
.filter().map() → for combined powerful processing

IMPORTANT:
----------
✔ Both do NOT mutate original array → returns new array
✔ You can chain them easily
*/

//////////////////////////////////////////////////
// ✅ You now understand .filter() and .map()!
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
