// ifElse.js
// 📘 Author: Raj Deshmukh

"use strict";

const age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

//////////////////////////////////////////////////
// if...else if...else chain
//////////////////////////////////////////////////

const score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D or F");
}
