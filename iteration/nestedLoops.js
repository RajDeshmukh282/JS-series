// nestedLoops.js
// 📘 Author: Raj Deshmukh

"use strict";

// ✅ Nested loop example
for (let i = 1; i <= 3; i++) {
  console.log(`Outer loop i = ${i}`);

  for (let j = 1; j <= 2; j++) {
    console.log(`  Inner loop j = ${j}`);
  }
}
