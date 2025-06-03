// datatype.js
// 📘 Created by: Raj Deshmukh

// 🔐 Enable strict mode (best practice)
"use strict";

//////////////////////////////////////////////////
// 📘 JavaScript Data Types - Full Explanation
//////////////////////////////////////////////////

// JavaScript has two main categories of types:
// 1. Primitive Types
// 2. Non-Primitive (Reference) Types

//////////////////////////////////////////////////
// 1. 🧱 Primitive Data Types
//////////////////////////////////////////////////

// 🔹 String - sequence of characters
let fullName = "Raj Deshmukh"; // can use "double" or 'single' quotes
console.log(typeof fullName); // string

// 🔹 Number - integer or floating point
let age = 25;
let price = 99.99;
console.log(typeof age); // number

// 🔸 🔎 Number Range:
// JavaScript numbers follow the IEEE-754 standard (64-bit floating point)
// Safe Integer Range: from -(2^53 - 1) to +(2^53 - 1)
// ≈ -9007199254740991 to +9007199254740991

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 🔹 Boolean - true or false values
let isLoggedIn = true;
let hasAccess = false;
console.log(typeof isLoggedIn); // boolean

// 🔹 Undefined - declared but not assigned
let score;
console.log(typeof score); // undefined

// 🔹 Null - deliberately no value
let car = null;
console.log(typeof car); // object (a known bug in JavaScript, but still a primitive)

// 🔹 Symbol - used for unique identifiers (advanced)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false (each symbol is unique)
console.log(typeof sym1); // symbol

// 🔹 BigInt - for very large integers
let bigNum = 1234567890123456789012345678901234567890n;
console.log(typeof bigNum); // bigint

// 🔸 🔎 BigInt Range:
// Supports integers beyond Number.MAX_SAFE_INTEGER
// No fixed limit, constrained by memory

//////////////////////////////////////////////////
// 2. 📦 Non-Primitive (Reference) Data Types
//////////////////////////////////////////////////

// 🔸 Object - collection of key-value pairs
let person = {
  name: "Raj Deshmukh",
  age: 30,
  city: "Mumbai",
};
console.log(typeof person); // object

// 🔸 Array - ordered list of values
let hobbies = ["reading", "gaming", "coding"];
console.log(typeof hobbies); // object
console.log(Array.isArray(hobbies)); // true

// 🔸 Function - reusable block of code
function greet() {
  return "Hello, Raj!";
}
console.log(typeof greet); // function

//////////////////////////////////////////////////
// 3. 🧪 Type Checking & Conversion
//////////////////////////////////////////////////

// 🔍 typeof - checks the type of a variable
console.log(typeof 42);         // number
console.log(typeof "Hello");    // string
console.log(typeof true);       // boolean

// 🔁 Type conversion
let strNum = "123";
let converted = Number(strNum); // Converts string to number
console.log(typeof converted);  // number

let n = 456;
let toStr = String(n);          // Converts number to string
console.log(typeof toStr);      // string

//////////////////////////////////////////////////
// 4. 🧪 Special Cases
//////////////////////////////////////////////////

// NaN - "Not a Number"
let badMath = "abc" * 2;
console.log(badMath); // NaN
console.log(typeof badMath); // number (weird but true)

// Infinity and -Infinity
console.log(1 / 0);  // Infinity
console.log(-1 / 0); // -Infinity

//////////////////////////////////////////////////
// 5. 🧠 Summary Table (in comments)
//////////////////////////////////////////////////

/*
Primitive Types:
----------------
- String     -> "Hello"
- Number     -> 42, 3.14
   Range     -> -9007199254740991 to +9007199254740991
- Boolean    -> true / false
- Undefined  -> declared but not initialized
- Null       -> intentional empty value
- Symbol     -> unique identifiers
- BigInt     -> very large integers (e.g. 9007199254740992n)

Non-Primitive Types:
--------------------
- Object     -> { key: value }
- Array      -> [1, 2, 3]
- Function   -> function() {}

Type Checking:
--------------
- typeof variable -> gives type
- Array.isArray(variable) -> checks if it's an array

Type Conversion:
----------------
- String(value) -> to string
- Number(value) -> to number
- Boolean(value) -> to true/false
https : // 262. ecma-international.https : // 262. ecma-international.org/5.1/#sec-9.1
*/

//////////////////////////////////////////////////
// ✅ Done! You now know all about JS Data Types!
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
