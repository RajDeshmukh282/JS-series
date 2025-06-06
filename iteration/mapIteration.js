// mapIteration.js
// 📘 Author: Raj Deshmukh

"use strict";

const myMap = new Map();
myMap.set("name", "Raj");
myMap.set("age", 25);
myMap.set("city", "Pune");

// ✅ for...of on Map
for (const [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}

// ✅ forEach on Map
myMap.forEach((value, key) => {
  console.log(`Map forEach: ${key} => ${value}`);
});
