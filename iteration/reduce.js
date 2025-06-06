// reduce.js
// 📘 Author: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// ➤ .reduce() Method
//////////////////////////////////////////////////

/*
Definition:
-----------
.reduce() reduces an array to a single value.
It executes a reducer function for each element.

SYNTAX:
--------
array.reduce((accumulator, currentValue, currentIndex, array) => {
    return updatedAccumulator;
}, initialValue);

WHAT IS ACCUMULATOR?
--------------------
It is the running total / result that gets passed to each iteration.

USE CASES:
----------
✔ Sum of numbers
✔ Product of numbers
✔ Flatten array
✔ Count items
✔ Grouping items
✔ Anything where you want a single result!
*/

//////////////////////////////////////////////////
// Example 1: Sum of Numbers
//////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(`Accumulator: ${accumulator}, CurrentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log("✅ Sum of numbers:", sum);

//////////////////////////////////////////////////
// Example 2: Flatten Array
//////////////////////////////////////////////////

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log("✅ Flattened array:", flatArray);

//////////////////////////////////////////////////
// Example 3: Count Occurrences of Items
//////////////////////////////////////////////////

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((accumulator, fruit) => {
  if (accumulator[fruit]) {
    accumulator[fruit]++;
  } else {
    accumulator[fruit] = 1;
  }
  return accumulator;
}, {});

console.log("✅ Fruit count:", fruitCount);

//////////////////////////////////////////////////
// Common Mistakes
//////////////////////////////////////////////////

/*
❌ Forgetting initial value → can lead to bugs!
❌ Returning wrong type → return accumulator each time!
❌ Trying to mutate original array → avoid this
*/

//////////////////////////////////////////////////
// Summary
//////////////////////////////////////////////////

/*
.reduce() → most powerful array method!

✔ It reduces an array → single value (number, object, string, array)
✔ You provide a reducer function
✔ You must return the updated accumulator each time
✔ Initial value is important

MOST COMMON PATTERNS:
---------------------
✔ Sum → initial value = 0
✔ Object → initial value = {}
✔ Array → initial value = []
*/

//////////////////////////////////////////////////
// ✅ You now understand .reduce()!
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
