// strings.js
// 📘 Created by: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// 🧵 Strings in JavaScript
//////////////////////////////////////////////////

// Strings are sequences of characters used to represent text.

// You can declare strings using:
let singleQuote = 'This is a string in single quotes';
let doubleQuote = "This is a string in double quotes";
let backtick = `This is a string using backticks (template literals)`;

// Backticks allow string interpolation (inserting variables)
let name = "Raj";
let greeting = `Hello, my name is ${name}`;
console.log(greeting); // Hello, my name is Raj

//////////////////////////////////////////////////
// 🔤 Common String Methods
//////////////////////////////////////////////////

let str = "  JavaScript is Awesome!  ";

console.log(str.length);             // 26 (includes spaces)
console.log(str.toLowerCase());      // javascript is awesome!
console.log(str.toUpperCase());      // JAVASCRIPT IS AWESOME!
console.log(str.trim());             // "JavaScript is Awesome!" (removes extra spaces)
console.log(str.indexOf("is"));      // 13
console.log(str.includes("Awesome"));// true
console.log(str.startsWith("  Ja")); // true
console.log(str.endsWith("!  "));    // true

// Extracting parts of a string
console.log(str.slice(2, 12));       // JavaScript
console.log(str.substring(2, 12));   // JavaScript
console.log(str.replace("Awesome", "Powerful")); // replaces first occurrence

// Splitting a string
let tags = "js,html,css";
console.log(tags.split(","));        // ["js", "html", "css"]

//////////////////////////////////////////////////
// 🧩 Escape Characters
//////////////////////////////////////////////////

let quote = 'He said, "It\'s amazing!"';
console.log(quote); // He said, "It's amazing!"

// Other escape sequences: \n (new line), \t (tab)
console.log("Line1\nLine2");
console.log("Column1\tColumn2");

//////////////////////////////////////////////////
// 🧠 String Immutability
//////////////////////////////////////////////////

let original = "Hello";
let modified = original.replace("H", "Y");

console.log(original); // Hello (unchanged)
console.log(modified); // Yello (new string)

// ✅ Strings are immutable in JS — operations return new strings

//////////////////////////////////////////////////
// 💡 Template Literals (Backticks ` `)
//////////////////////////////////////////////////

let product = "Laptop";
let price = 50000;

let description = `The price of the ${product} is ₹${price}`;
console.log(description); // The price of the Laptop is ₹50000

//////////////////////////////////////////////////
// 💬 String Concatenation
//////////////////////////////////////////////////

let first = "Raj";
let last = "Deshmukh";

let full1 = first + " " + last; // using +
let full2 = `${first} ${last}`; // using backticks

console.log(full1); // Raj Deshmukh
console.log(full2); // Raj Deshmukh

//////////////////////////////////////////////////
// ✅ Summary (in comments)
//////////////////////////////////////////////////

/*
STRING BASICS:
--------------
- Strings can be made with '', "", or backticks (``)
- Backticks allow embedded expressions via ${}

COMMON METHODS:
---------------
- length, toUpperCase(), toLowerCase()
- trim(), indexOf(), includes()
- slice(), substring(), replace(), split()
- startsWith(), endsWith()

KEY POINTS:
-----------
✅ Strings are immutable (operations return new strings)
✅ Use template literals for cleaner concatenation and dynamic content
✅ Use escape characters for quotes, tabs, and newlines
*/

//////////////////////////////////////////////////
// 🎉 Done! You now understand JavaScript Strings!
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
