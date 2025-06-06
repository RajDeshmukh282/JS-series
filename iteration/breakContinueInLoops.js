// breakContinueInLoops.js
// 📘 Author: Raj Deshmukh

"use strict";

console.log("=== BREAK Example ===");
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log("=== CONTINUE Example ===");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
