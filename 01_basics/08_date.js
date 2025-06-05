// dateAndtime.js
// 📘 Created by: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// ⏳ Working with Date and Time in JavaScript
//////////////////////////////////////////////////

// JavaScript has a built-in `Date` object for handling date and time.

// ✅ Creating a date object
let currentDate = new Date();
console.log("Current Date & Time:", currentDate);

// 📅 Specific date (Note: Month is 0-indexed → Jan = 0, Dec = 11)
let birthday = new Date(2000, 4, 15); // May 15, 2000
let exactDate = new Date("2024-12-25T10:00:00");

console.log("Birthday:", birthday);
console.log("Exact Date:", exactDate);

// 🕒 Get parts of a date
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1); // +1 for human readable
console.log("Date:", currentDate.getDate());
console.log("Day of week (0 = Sun):", currentDate.getDay());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
console.log("Milliseconds:", currentDate.getMilliseconds());

// ✏️ Set parts of a date
currentDate.setFullYear(2025);
currentDate.setMonth(11); // December
currentDate.setDate(25);
console.log("Modified Date:", currentDate);

//////////////////////////////////////////////////
// 📐 Timestamp and Calculations
//////////////////////////////////////////////////

// Get current timestamp (in milliseconds since Jan 1, 1970)
let timestamp = Date.now();
console.log("Timestamp:", timestamp);

// Convert to seconds
console.log("Seconds since 1970:", Math.floor(timestamp / 1000));

// Get time difference between two dates
let date1 = new Date("2025-01-01");
let date2 = new Date("2025-06-06");

let differenceMs = date2 - date1; // in milliseconds
let days = differenceMs / (1000 * 60 * 60 * 24);
console.log(`Days between: ${days} days`);

//////////////////////////////////////////////////
// 🗓️ Date Formatting
//////////////////////////////////////////////////

let d = new Date();

console.log("ISO String:", d.toISOString());          // 2025-06-06T18:25:43.511Z
console.log("Locale String:", d.toLocaleString());    // e.g., 6/6/2025, 11:55 PM
console.log("Locale Date:", d.toLocaleDateString());  // e.g., 6/6/2025
console.log("Locale Time:", d.toLocaleTimeString());  // e.g., 11:55:43 PM
console.log("UTC String:", d.toUTCString());          // Fri, 06 Jun 2025 18:25:43 GMT

//////////////////////////////////////////////////
// 🧠 Using `new` Keyword with Date
//////////////////////////////////////////////////

let customDate = new Date(2025, 5, 6, 10, 30); // June 6, 2025 10:30 AM
console.log("Custom Date using new:", customDate);

//////////////////////////////////////////////////
// 💡 Summary (in comments)
//////////////////////////////////////////////////

/*
📌 Date Basics:
--------------
- Use `new Date()` to get current date/time
- Use `new Date(year, month, date, hours, minutes, seconds)`
- Months are 0-indexed (0 = January)

📌 Getting values:
------------------
- getFullYear(), getMonth(), getDate(), getDay()
- getHours(), getMinutes(), getSeconds()

📌 Setting values:
------------------
- setFullYear(), setMonth(), setDate(), etc.

📌 Useful Methods:
------------------
- Date.now() → current timestamp in ms
- toISOString(), toLocaleString(), toUTCString()
- Subtract dates to find time difference in ms

⚠️ Remember:
-----------
- Always check time zones if working with different regions
- Prefer ISO format for sending/storing dates
*/

//////////////////////////////////////////////////
// ✅ Done! You now know JavaScript Date & Time!
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
