// arrayIteration.js
// 📘 Author: Raj Deshmukh

"use strict";

const fruits = ["Apple", "Banana", "Cherry"];

// ✅ For loop
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit (for loop):", fruits[i]);
}

// ✅ for...of
for (const fruit of fruits) {
  console.log("Fruit (for...of):", fruit);
}

// ✅ forEach
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index}: ${fruit}`);
});
