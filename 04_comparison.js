// comparison.js
// 📘 Created by: Raj Deshmukh

"use strict"; // Always use strict mode

//////////////////////////////////////////////////
// 🔍 Comparison Operators in JavaScript
//////////////////////////////////////////////////

// JavaScript supports two types of equality:
// 1. Loose equality (==)
// 2. Strict equality (===)

//////////////////////////////////////////////////
// 1️⃣ Equality Operators
//////////////////////////////////////////////////

// 🔸 Loose Equality (==) - compares values after type conversion
console.log("5" == 5);      // true (string is converted to number)
console.log(null == undefined); // true
console.log(false == 0);    // true
console.log(" " == 0);      // true

// 🔸 Strict Equality (===) - compares values and types
console.log("5" === 5);     // false (string vs number)
console.log(false === 0);   // false
console.log(10 === 10);     // true (same type and value)

//////////////////////////////////////////////////
// 2️⃣ Inequality Operators
//////////////////////////////////////////////////

console.log("5" != 5);      // false (values are equal after conversion)
console.log("5" !== 5);     // true (different types)

//////////////////////////////////////////////////
// 3️⃣ Relational Operators
//////////////////////////////////////////////////

console.log(10 > 5);        // true
console.log(5 < 3);         // false
console.log(10 >= 10);      // true
console.log(3 <= 2);        // false

//////////////////////////////////////////////////
// 4️⃣ Comparing Strings
//////////////////////////////////////////////////

// Strings are compared based on Unicode values
console.log("apple" < "banana");  // true
console.log("a" > "A");           // true (lowercase > uppercase)

// Case-sensitive comparison
console.log("Hello" === "hello"); // false

//////////////////////////////////////////////////
// 5️⃣ Special Cases
//////////////////////////////////////////////////

// 🔸 NaN is never equal to anything, not even itself
console.log(NaN === NaN);       // false
console.log(Number.isNaN(NaN)); // true

// 🔸 null and undefined only equal each other with loose equality
console.log(null == undefined);  // true
console.log(null === undefined); // false

// 🔸 Objects and arrays are reference types
let a = [1, 2];
let b = [1, 2];
console.log(a == b);  // false
console.log(a === b); // false (different references)

let obj1 = { name: "Raj" };
let obj2 = obj1;
console.log(obj1 === obj2); // true (same reference)

//////////////////////////////////////////////////
// 🧠 Summary Table (in comments)
//////////////////////////////////////////////////

/*
Comparison Operators:
---------------------
==      -> Loose equality (type conversion)
===     -> Strict equality (no type conversion)
!=      -> Loose inequality
!==     -> Strict inequality
> < >= <= -> Relational comparisons

Best Practices:
---------------
✅ Always use === and !== for safer, predictable comparisons
✅ Avoid == with different types (can lead to confusing results)
✅ Use Number.isNaN() to check for NaN
✅ When comparing objects or arrays, remember they compare by reference

Examples:
---------
"5" == 5      -> true
"5" === 5     -> false
null == undefined -> true
false == 0    -> true
false === 0   -> false
NaN === NaN   -> false
*/

//////////////////////////////////////////////////
// ✅ Done! You now know JavaScript Comparisons!
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
