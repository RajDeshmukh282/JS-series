// forInLoop.js
// 📘 Author: Raj Deshmukh

"use strict";

const person = {
  name: "Raj",
  age: 25,
  city: "Pune"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
