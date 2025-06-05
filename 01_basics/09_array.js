// array.js
// 📘 Created by: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// 📦 Arrays in JavaScript
//////////////////////////////////////////////////

// ✅ Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = new Array(1, 2, 3, 4, 5);
let emptyArr = [];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Empty:", emptyArr);

// ✅ Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

//////////////////////////////////////////////////
// ➕ Adding and Removing Elements
//////////////////////////////////////////////////

// Push - adds to end
fruits.push("grape");
console.log("After push:", fruits);

// Pop - removes from end
let popped = fruits.pop();
console.log("Popped:", popped, "→", fruits);

// Unshift - adds to beginning
fruits.unshift("mango");
console.log("After unshift:", fruits);

// Shift - removes from beginning
let shifted = fruits.shift();
console.log("Shifted:", shifted, "→", fruits);

//////////////////////////////////////////////////
// 🔍 Searching in Arrays
//////////////////////////////////////////////////

console.log("Index of banana:", fruits.indexOf("banana")); // returns -1 if not found
console.log("Includes 'apple'?", fruits.includes("apple"));

//////////////////////////////////////////////////
// 🔄 Looping through Arrays
//////////////////////////////////////////////////

console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("Using for...of:");
for (let fruit of fruits) {
  console.log(fruit);
}

console.log("Using forEach:");
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

//////////////////////////////////////////////////
// ✂️ slice() and splice()
//////////////////////////////////////////////////

// slice(start, end) → non-destructive
let someFruits = fruits.slice(0, 2); // 0 and 1
console.log("Sliced:", someFruits);

// splice(start, deleteCount, ...items) → destructive
fruits.splice(1, 1, "kiwi", "pear"); // removes 1, inserts 2
console.log("After splice:", fruits);

//////////////////////////////////////////////////
// 🔄 Transforming Arrays
//////////////////////////////////////////////////

let numArr = [1, 2, 3, 4, 5];

let squares = numArr.map((n) => n * n);
console.log("Squares:", squares);

let evens = numArr.filter((n) => n % 2 === 0);
console.log("Even numbers:", evens);

let sum = numArr.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);

//////////////////////////////////////////////////
// 📚 Useful Methods
//////////////////////////////////////////////////

let joined = fruits.join(", ");
console.log("Joined:", joined);

let reversed = [...fruits].reverse();
console.log("Reversed:", reversed);

let sorted = [...fruits].sort(); // modifies array (use spread to avoid original mutation)
console.log("Sorted:", sorted);

//////////////////////////////////////////////////
// 🧠 Advanced Array Concepts
//////////////////////////////////////////////////

// Spread operator (...)
let moreFruits = ["pineapple", ...fruits];
console.log("More Fruits:", moreFruits);

// Destructuring
let [f1, f2, ...rest] = fruits;
console.log("First:", f1, "Second:", f2, "Rest:", rest);

// Array.isArray() to check type
console.log("Is 'fruits' an array?", Array.isArray(fruits));

//////////////////////////////////////////////////
// 💡 Summary (in comments)
//////////////////////////////////////////////////

/*
📌 Array Basics:
---------------
- Arrays store multiple values in one variable.
- Index starts at 0.

📌 Common Methods:
------------------
- push(), pop(), unshift(), shift()
- slice(), splice()
- forEach(), map(), filter(), reduce()
- sort(), reverse(), join()

📌 Advanced:
-----------
- Spread (...) to copy or merge
- Destructuring to unpack values
- Array.isArray() to check if variable is array

⚠️ slice = non-destructive
⚠️ splice = destructive (modifies original array)
*/

//////////////////////////////////////////////////
// ✅ Done! You now know JavaScript Arrays 🎉
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
