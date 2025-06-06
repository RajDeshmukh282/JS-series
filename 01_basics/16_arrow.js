// arrow.js
// 📘 Author: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// ➤ Arrow Functions in JavaScript
//////////////////////////////////////////////////

// ✅ Basic Arrow Function
const add = (a, b) => a + b;
console.log("Add:", add(2, 3));

// ✅ With one parameter (no parentheses needed)
const greet = name => `Hello, ${name}`;
console.log(greet("Raj"));

// ✅ No parameters (must use empty ())
const sayHi = () => "Hi there!";
console.log(sayHi());

// ✅ Multi-line arrow function (needs {})
const multiply = (x, y) => {
  const result = x * y;
  return result;
};
console.log("Multiply:", multiply(4, 5));

//////////////////////////////////////////////////
// ❌ Arrow Functions and `this`
//////////////////////////////////////////////////

const person = {
  name: "Raj",
  normalFunc: function () {
    console.log("Normal:", this.name); // Raj
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name); // undefined (lexical this)
  }
};

person.normalFunc();
person.arrowFunc();

//////////////////////////////////////////////////
// ❌ Arrow Functions Don't Have `arguments`
//////////////////////////////////////////////////

function normalFn() {
  console.log("Normal arguments:", arguments);
}
normalFn(1, 2, 3);

// const arrowFn = () => {
//   console.log(arguments); // ❌ ReferenceError
// };

//////////////////////////////////////////////////
// ✅ Arrow Functions with Array Methods
//////////////////////////////////////////////////

const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log("Doubled:", doubled);

// ✅ Clean syntax in forEach
nums.forEach((n, i) => console.log(`Index ${i}: ${n}`));

//////////////////////////////////////////////////
// 🧾 Summary
//////////////////////////////////////////////////

/*
ARROW FUNCTIONS:
----------------
✔ Compact syntax
✔ No `this` binding (lexical this)
✔ No `arguments` object
✔ Ideal for small/inline callbacks
✔ Cannot be used as constructor (no `new`)

WHEN TO USE:
------------
✅ Short functions
✅ Array methods (map, filter, forEach)
❌ When you need your own `this` or `arguments`
*/

//////////////////////////////////////////////////
// ✅ You mastered arrow functions! 🚀
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
