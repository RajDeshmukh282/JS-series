// conversionOperation.js
// 📘 Created by: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// 🔄 JavaScript Type Conversion
//////////////////////////////////////////////////

// JavaScript is dynamically typed — values can change type automatically or manually

//////////////////////////////////////////////////
// 🧪 1. Explicit Conversion (You do it manually)
//////////////////////////////////////////////////

// ✅ String to Number
let str1 = "42";
let num1 = Number(str1); // or parseInt(str1), parseFloat(str1)
console.log(num1); // 42
console.log(typeof num1); // number

// ✅ Number to String
let num2 = 123;
let str2 = String(num2); // or num2.toString()
console.log(str2); // "123"
console.log(typeof str2); // string

// ✅ Boolean to Number
console.log(Number(true));  // 1
console.log(Number(false)); // 0

// ✅ Boolean to String
console.log(String(true));  // "true"
console.log(String(false)); // "false"

// ✅ String to Boolean
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false (empty string is false)

// ✅ Number to Boolean
console.log(Boolean(100));   // true
console.log(Boolean(0));     // false

//////////////////////////////////////////////////
// ⚠️ 2. Implicit Conversion (JavaScript does it automatically)
//////////////////////////////////////////////////

// String + Number → String
console.log("5" + 2); // "52"

// Number + Boolean → Number
console.log(5 + true); // 6 (true → 1)
console.log(5 + false); // 5 (false → 0)

// Subtract / Multiply / Divide → Number
console.log("10" - 2); // 8
console.log("10" * 2); // 20
console.log("10" / 2); // 5

// Comparison Operators → Boolean
console.log("5" == 5);  // true (== does type coercion)
console.log("5" === 5); // false (=== checks type and value)

//////////////////////////////////////////////////
// 💥 3. Common Pitfalls
//////////////////////////////////////////////////

// NaN - Not a Number
console.log(Number("abc")); // NaN
console.log(typeof NaN);    // number

// null vs undefined
console.log(Number(null));     // 0
console.log(Number(undefined)); // NaN

// + operator confusion
console.log("5" + 1); // "51"
console.log("5" - 1); // 4

//////////////////////////////////////////////////
// 🧠 4. Conversion Summary (in comments)
//////////////////////////////////////////////////

/*
🔄 Type Conversion Methods:
---------------------------
String(value)  -> Converts value to string
Number(value)  -> Converts value to number
Boolean(value) -> Converts value to true/false

Common Boolean Conversions:
---------------------------
Falsy Values  -> false, 0, "", null, undefined, NaN
Truthy Values -> all others (non-empty string, non-zero number, etc.)

Operators that trigger implicit conversion:
-------------------------------------------
+   (for string concat)
-, *, /, <, >, == (trigger numeric coercion)
=== (strict equality, no coercion)

⚠️ Always prefer explicit conversion for safer, clearer code.
*/

//////////////////////////////////////////////////
// ✅ Done! You now know all about Type Conversion!
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
