// function.js
// 📘 Author: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// ⚙️ JavaScript Functions - Basics to Advanced
//////////////////////////////////////////////////

// ✅ Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Raj")); // Hello, Raj

// ✅ Function Expression
const add = function (a, b) {
  return a + b;
};
console.log("Add:", add(3, 5));

// ✅ Arrow Function (No 'this', compact syntax)
const multiply = (x, y) => x * y;
console.log("Multiply:", multiply(4, 5));

// ✅ Default Parameters
function welcome(name = "Guest") {
  return `Welcome, ${name}`;
}
console.log(welcome()); // Welcome, Guest

// ✅ Returning Values
function square(n) {
  return n * n;
}
console.log("Square:", square(6));

//////////////////////////////////////////////////
// 🔁 IIFE - Immediately Invoked Function Expression
//////////////////////////////////////////////////

(function () {
  console.log("✅ IIFE ran automatically");
})();

//////////////////////////////////////////////////
// 🔁 Callback Functions
//////////////////////////////////////////////////

function process(callback) {
  console.log("Before callback");
  callback();
  console.log("After callback");
}

process(() => console.log("Inside callback"));

//////////////////////////////////////////////////
// 🧠 First-Class and Higher-Order Functions
//////////////////////////////////////////////////

// First-class → functions are treated like variables
const sayHi = function () {
  console.log("Hi!");
};

const runFn = function (fn) {
  fn();
};

runFn(sayHi); // passing a function to another

//////////////////////////////////////////////////
// 📌 Named vs Anonymous Functions
//////////////////////////////////////////////////

// Named
function namedFn() {
  console.log("I'm named");
}

// Anonymous
const anonFn = function () {
  console.log("I'm anonymous");
};

namedFn();
anonFn();

//////////////////////////////////////////////////
// 💬 Function with Rest Parameters
//////////////////////////////////////////////////

function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("Sum all:", sumAll(1, 2, 3, 4)); // 10

//////////////////////////////////////////////////
// 🧩 Function Hoisting
//////////////////////////////////////////////////

hoisted(); // ✅ works because function declarations are hoisted

function hoisted() {
  console.log("I'm hoisted!");
}

// const notHoisted = function () {}; ❌ won't hoist

//////////////////////////////////////////////////
// 🧬 `this` Keyword in Functions
//////////////////////////////////////////////////

const obj = {
  name: "Raj",
  regularFunc: function () {
    console.log("Regular this:", this.name);
  },
  arrowFunc: () => {
    // Arrow doesn't bind its own `this`
    console.log("Arrow this:", this.name);
  }
};

obj.regularFunc(); // Raj
obj.arrowFunc();   // undefined (because it uses outer lexical `this`)

//////////////////////////////////////////////////
// 🧮 `arguments` Object (Not in Arrow Functions)
//////////////////////////////////////////////////

function totalArguments() {
  console.log("Arguments:", arguments);
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}

console.log("Total:", totalArguments(1, 2, 3));

// ❌ Doesn't work in arrow function
const arrowArgs = () => {
  // console.log(arguments); // ReferenceError
};

//////////////////////////////////////////////////
// 🧾 Summary (in comments)
//////////////////////////////////////////////////

/*
FUNCTION BASICS:
----------------
✔ Declaration vs Expression vs Arrow
✔ Parameters and return
✔ Default parameters

ADVANCED:
---------
✔ IIFE (run once immediately)
✔ Callback functions
✔ First-class & higher-order
✔ Named vs anonymous
✔ Rest parameters (...args)
✔ Function hoisting
✔ this keyword behavior
✔ arguments object (only in regular functions)

ARROW FUNCTION NOTES:
---------------------
❌ No own `this`
❌ No `arguments` object
✅ Short and clean syntax

*/

//////////////////////////////////////////////////
// ✅ You now fully understand functions in JS! 🔥
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
