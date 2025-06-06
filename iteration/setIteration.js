// setIteration.js
// 📘 Author: Raj Deshmukh

"use strict";

const mySet = new Set(["Apple", "Banana", "Cherry", "Apple"]); // duplicate removed

// ✅ for...of on Set
for (const item of mySet) {
  console.log("Set item:", item);
}

// ✅ forEach on Set
mySet.forEach(item => {
  console.log("Set forEach item:", item);
});
