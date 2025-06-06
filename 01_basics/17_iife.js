// iife.js
// 📘 Author: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// 🔁 What is an IIFE?
// IIFE = Immediately Invoked Function Expression
// It's a function that runs as soon as it is defined.
//////////////////////////////////////////////////

// ✅ Basic IIFE
(function () {
  console.log("🔥 IIFE ran immediately!");
})();

// ✅ Arrow Function IIFE
(() => {
  console.log("🚀 Arrow function IIFE");
})();

// ✅ Named IIFE (rare but valid)
(function sayHello() {
  console.log("👋 Hello from named IIFE");
})();

// ✅ IIFE with parameters
((name) => {
  console.log(`🧑 Hello, ${name}`);
})("Raj");

// ✅ Returning a value from IIFE
const result = (() => {
  let a = 5, b = 10;
  return a + b;
})();
console.log("✅ Result from IIFE:", result);

//////////////////////////////////////////////////
// 🔒 Private Scope Using IIFE
//////////////////////////////////////////////////

const counter = (() => {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count
  };
})();

console.log("🔢 Counter value:", counter.value());
counter.increment();
counter.increment();
console.log("🔢 After increment:", counter.value());
counter.decrement();
console.log("🔢 After decrement:", counter.value());

//////////////////////////////////////////////////
// ⚙️ Use Cases of IIFE
//////////////////////////////////////////////////

// ✅ Avoid polluting global scope
(() => {
  const secret = "I'm private";
  console.log("🔐 Secret inside IIFE:", secret);
})();
// console.log(secret); // ❌ Error: secret is not defined

// ✅ Module pattern (older version before ES6 modules)
const app = (() => {
  const version = "1.0.0";

  const getVersion = () => version;

  return {
    getVersion
  };
})();
console.log("📦 App Version:", app.getVersion());

//////////////////////////////////////////////////
// 🕒 Async IIFE
//////////////////////////////////////////////////

(async () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  await delay(500);
  console.log("⏳ Async IIFE complete after delay!");
})();

//////////////////////////////////////////////////
// 🧾 Summary
//////////////////////////////////////////////////

/*
IIFE (Immediately Invoked Function Expression)
---------------------------------------------
✔ Syntax: (function(){})()
✔ Runs immediately after definition
✔ Creates a private scope
✔ Can return a value
✔ Useful for:
   - Avoiding global scope pollution
   - Module pattern
   - Creating closures
✔ Works with arrow functions too
✔ Can be async!

WARNING:
❌ Do not overuse IIFE — use it where isolation is needed
*/

//////////////////////////////////////////////////
// ✅ You now know how to use IIFE like a pro! 💡
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
