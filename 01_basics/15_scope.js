// scope.js
// 📘 Author: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// 🎯 JavaScript Scope - Deep Explanation
//////////////////////////////////////////////////

// ✅ Global Scope
const globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // Accessible
}
showGlobal();

// ✅ Function Scope
function testScope() {
  let localVar = "I'm local";
  console.log(localVar);
}
// console.log(localVar); ❌ Error - not accessible outside

// ✅ Block Scope with let/const
{
  let blockLet = "Block scoped let";
  const blockConst = "Block scoped const";
  console.log(blockLet, blockConst);
}
// console.log(blockLet); // ❌ Error
// console.log(blockConst); // ❌ Error

// ✅ var is function scoped (NOT block scoped)
{
  var functionScopedVar = "I'm var";
}
console.log(functionScopedVar); // ✅ Accessible (avoid using var!)

//////////////////////////////////////////////////
// 🌀 Scope Chain
//////////////////////////////////////////////////

const outerVar = "outer";

function outer() {
  const innerVar = "inner";

  function inner() {
    console.log(outerVar); // ✅ Can access
    console.log(innerVar); // ✅ Can access
  }

  inner();
}
outer();

//////////////////////////////////////////////////
// 🔁 Lexical Scope
//////////////////////////////////////////////////

function outerLexical() {
  const message = "Hi from outer";

  return function innerLexical() {
    console.log(message); // ✅ Still has access
  };
}

const lexicalFunc = outerLexical();
lexicalFunc(); // Hi from outer

//////////////////////////////////////////////////
// 🧠 Closures Example (scope + function returned)
//////////////////////////////////////////////////

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

//////////////////////////////////////////////////
// 🧾 Summary
//////////////////////////////////////////////////

/*
TYPES OF SCOPE:
---------------
✔ Global Scope - accessible anywhere
✔ Function Scope - only inside the function
✔ Block Scope - inside {} when using let/const
✔ Lexical Scope - inner functions remember outer variables

IMPORTANT:
----------
- Avoid `var` (it ignores block scope)
- Closures use lexical scope
- Variables bubble up through scope chain

*/

//////////////////////////////////////////////////
// ✅ You now know Scope & Closure! 🔥
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
