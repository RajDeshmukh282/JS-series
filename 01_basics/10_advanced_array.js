// advanced_array.js
// 📘 Created by: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// 🧠 Advanced Array Concepts in JavaScript
//////////////////////////////////////////////////

// Sample array for examples
const numbers = [1, 2, 3, 4, 5, 6];

//////////////////////////////////////////////////
// 🔁 High Order Functions
//////////////////////////////////////////////////

// map() → returns a new array after transformation
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter() → returns a new array of elements that match the condition
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// reduce() → reduces array to a single value
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", total);

// find() → finds the first matching element
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even:", firstEven);

// findIndex() → returns index of first match
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("Index of first even:", firstEvenIndex);

// some() → checks if *any* element satisfies condition
console.log("Has numbers > 5?", numbers.some(num => num > 5));

// every() → checks if *all* elements satisfy condition
console.log("All numbers < 10?", numbers.every(num => num < 10));

//////////////////////////////////////////////////
// 🧱 Nested Arrays and .flat()
//////////////////////////////////////////////////

const nested = [1, 2, [3, 4, [5, 6]]];

console.log("Nested:", nested);
console.log("Flat level 1:", nested.flat());
console.log("Flat level 2:", nested.flat(2));

//////////////////////////////////////////////////
// 🌱 flatMap()
//////////////////////////////////////////////////

const phrases = ["hello world", "hi there"];
const words = phrases.flatMap(str => str.split(" "));
console.log("Words:", words);

//////////////////////////////////////////////////
// 🌊 Spread Operator & Destructuring
//////////////////////////////////////////////////

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Destructuring
const [a, b, ...rest] = combined;
console.log("a:", a, "b:", b, "rest:", rest);

//////////////////////////////////////////////////
// 🔗 Method Chaining
//////////////////////////////////////////////////

const result = numbers
  .filter(n => n % 2 !== 0) // [1, 3, 5]
  .map(n => n * 10)         // [10, 30, 50]
  .reduce((sum, n) => sum + n, 0); // 90

console.log("Chained Result:", result);

//////////////////////////////////////////////////
// 🪞 Shallow vs Deep Copy
//////////////////////////////////////////////////

const original = [1, 2, [3, 4]];

// Shallow copy using spread
const shallowCopy = [...original];
shallowCopy[2][0] = 99;

console.log("Original (after shallow copy):", original); // [1, 2, [99, 4]]

// Deep copy using JSON (⚠️ not suitable for functions/undefined)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy[2][0] = 3;

console.log("Original (after deep copy):", original); // [1, 2, [99, 4]]
console.log("Deep Copy:", deepCopy);                  // [1, 2, [3, 4]]

//////////////////////////////////////////////////
// 🔄 Reversing and Sorting
//////////////////////////////////////////////////

const nums = [10, 3, 45, 2, 7];
console.log("Sorted:", [...nums].sort((a, b) => a - b)); // Ascending
console.log("Reversed:", [...nums].reverse());

//////////////////////////////////////////////////
// 💡 Summary (in comments)
//////////////////////////////////////////////////

/*
ADVANCED ARRAY METHODS:
------------------------
✔ map(fn)       → transform values
✔ filter(fn)    → keep matching items
✔ reduce(fn)    → sum/combine to 1 value
✔ find(fn)      → get first matching item
✔ some(fn)      → at least 1 match?
✔ every(fn)     → all match?
✔ flat(level)   → flatten nested arrays
✔ flatMap(fn)   → map + flatten
✔ sort(), reverse() → mutate original array

SPREAD & DESTRUCTURING:
------------------------
- Spread (...) = expand/copy/merge arrays
- Destructuring = pull values from arrays

CHAINING:
---------
- Use multiple methods in sequence: map → filter → reduce

COPY TYPES:
-----------
- Spread creates a shallow copy
- JSON.parse(JSON.stringify()) creates deep copy

*/

//////////////////////////////////////////////////
// ✅ Done! You're a pro with advanced arrays 🔥
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
