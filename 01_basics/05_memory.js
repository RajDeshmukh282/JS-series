// 05_memory.js
// 📘 Created by: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// 🧠 JavaScript Memory Management Overview
//////////////////////////////////////////////////

/*
There are two types of memory in JavaScript:
1. Stack (used for primitive types)
2. Heap (used for reference types like objects and arrays)
*/

//////////////////////////////////////////////////
// 📦 1️⃣ Stack Memory (Primitive types)
//////////////////////////////////////////////////

// Primitive types: string, number, boolean, null, undefined, symbol, bigint
let name1 = "Raj";
let name2 = name1; // A copy is made

console.log(name1); // Raj
console.log(name2); // Raj

name2 = "Deshmukh";

console.log("After changing name2:");
console.log("name1:", name1); // Raj (unchanged)
console.log("name2:", name2); // Deshmukh

// ✅ Conclusion: Primitives are stored in stack and copied by value.

//////////////////////////////////////////////////
// 🧱 2️⃣ Heap Memory (Reference types)
//////////////////////////////////////////////////

// Reference types: object, array, function
let user1 = {
  name: "Raj",
  age: 22
};

let user2 = user1; // No copy — both point to the same object in heap

user2.age = 30;

console.log("user1:", user1); // age is 30
console.log("user2:", user2); // age is 30

// ✅ Conclusion: Objects are stored in heap and copied by reference.

//////////////////////////////////////////////////
// 🧪 3️⃣ How to Copy Objects Safely
//////////////////////////////////////////////////

// To make a true copy (not reference):
let original = { language: "JavaScript" };
let copy = { ...original }; // Spread operator

copy.language = "Python";

console.log("original:", original.language); // JavaScript
console.log("copy:", copy.language);         // Python

// ✅ Now they are separate in memory

//////////////////////////////////////////////////
// 💡 Summary Table (in comments)
//////////////////////////////////////////////////

/*
📚 MEMORY TYPES
------------------------------------------------
Stack:
- Fast
- Stores primitives
- Each variable gets its own copy

Heap:
- Slower
- Stores reference types (objects, arrays, functions)
- Variables store reference (address) not the actual value

📌 COPY BEHAVIOR
------------------------------------------------
Primitive -> Copy by value
Reference -> Copy by reference

✅ Use spread operator or Object.assign() to clone objects safely
✅ Changing reference-type copies will affect the original unless copied properly
*/

//////////////////////////////////////////////////
// ✅ Done! You now understand JS memory handling!
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
