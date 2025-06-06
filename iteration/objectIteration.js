// objectIteration.js
// 📘 Author: Raj Deshmukh

"use strict";

const person = {
  name: "Raj",
  age: 25,
  city: "Pune"
};

// ✅ for...in
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ✅ Object.keys + forEach
Object.keys(person).forEach(key => {
  console.log(`Key: ${key}, Value: ${person[key]}`);
});
