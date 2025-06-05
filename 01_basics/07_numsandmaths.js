
// nums_and_math.js
// 📘 Created by: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// 🔢 Numbers in JavaScript
//////////////////////////////////////////////////

// JavaScript has only one number type: 64-bit floating point

let intNum = 100;       // Integer
let floatNum = 99.99;   // Floating-point number
let negNum = -45;       // Negative number
let hexNum = 0xff;      // Hexadecimal (255)
let expNum = 1.5e3;     // Exponential (1500)
let bigInt = 1234567890123456789012345678901234567890n; // BigInt (added in ES2020)

console.log(typeof intNum);  // "number"
console.log(typeof bigInt);  // "bigint"

//////////////////////////////////////////////////
// 🆕 new Keyword with Number (Not Recommended)
//////////////////////////////////////////////////

// You can create a Number object using `new`, but it's rarely used.
let num1 = 100;                // primitive number
let num2 = new Number(100);    // object number

console.log(typeof num1); // "number"
console.log(typeof num2); // "object"

console.log(num1 === num2); // false (different types)

//////////////////////////////////////////////////
// 🎯 Special Values
//////////////////////////////////////////////////

console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log("abc" / 2);    // NaN (Not a Number)

console.log(Number.isNaN("abc" / 2));   // true
console.log(Number.isFinite(9999));     // true
console.log(Number.isFinite(Infinity)); // false

//////////////////////////////////////////////////
// 📐 Number Properties and Limits
//////////////////////////////////////////////////

console.log(Number.MAX_VALUE);   // Largest possible number
console.log(Number.MIN_VALUE);   // Smallest positive number
console.log(Number.MAX_SAFE_INTEGER); // 2^53 - 1
console.log(Number.MIN_SAFE_INTEGER); // -(2^53 - 1)
console.log(Number.EPSILON);    // Smallest difference between 2 values

//////////////////////////////////////////////////
// 🧮 Math Object: Common Methods
//////////////////////////////////////////////////

console.log(Math.PI);             // 3.14159...
console.log(Math.round(4.6));     // 5
console.log(Math.floor(4.9));     // 4
console.log(Math.ceil(4.1));      // 5
console.log(Math.trunc(4.9));     // 4 (removes decimal)
console.log(Math.sqrt(25));       // 5
console.log(Math.pow(2, 3));      // 8
console.log(Math.abs(-5));        // 5

// Min & Max
console.log(Math.min(4, 2, 8));   // 2
console.log(Math.max(4, 2, 8));   // 8

// Random number (0 to 1)
console.log(Math.random()); // 0.0 - 0.999...

// Custom: Random number from 1 to 10
let random = Math.floor(Math.random() * 10) + 1;
console.log("Random 1-10:", random);

//////////////////////////////////////////////////
// 🔄 Number Conversion
//////////////////////////////////////////////////

let strNum = "123";
let converted = Number(strNum);
console.log(converted);         // 123
console.log(typeof converted); // number

// parseInt and parseFloat
console.log(parseInt("45px"));   // 45
console.log(parseFloat("45.67px")); // 45.67

// toFixed
let price = 99.4567;
console.log(price.toFixed(2)); // "99.46" (rounded & string)

//////////////////////////////////////////////////
// 💡 Summary (in comments)
//////////////////////////////////////////////////

/*
NUMBER FACTS:
-------------
- JS uses 64-bit floating point for all numbers
- No separate int/float type
- BigInt allows large integers with 'n' suffix

SPECIAL VALUES:
---------------
- NaN (Not a Number)
- Infinity, -Infinity

MATH METHODS:
-------------
- Math.round(), floor(), ceil(), trunc()
- Math.abs(), sqrt(), pow(), min(), max()
- Math.random() for random numbers

CONVERSIONS:
------------
- Number("123")      → 123
- parseInt("12px")   → 12
- parseFloat("3.14") → 3.14
- .toFixed(2)        → fixed decimal string

LIMITS:
-------
- Number.MAX_VALUE, MIN_VALUE
- MAX_SAFE_INTEGER: 9007199254740991

⚠️ `new Number()` creates a number object, not a primitive.
   Avoid using it unless specifically needed (e.g., for object wrappers).
*/

//////////////////////////////////////////////////
// ✅ Done! You now know JS Numbers, Math, & `new`
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
