// object.js
// 📘 Created by: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// 🧱 JavaScript Objects - Basics to Advanced
//////////////////////////////////////////////////

// ✅ Creating an object
const person = {
  firstName: "Raj",
  lastName: "Deshmukh",
  age: 24,
  isStudent: true
};

console.log("Person:", person);

// ✅ Accessing properties
console.log("First Name:", person.firstName);
console.log("Last Name:", person["lastName"]);

// ✅ Modifying properties
person.age = 25;
person["isStudent"] = false;
console.log("Modified person:", person);

// ✅ Adding new properties
person.city = "Pune";
person["country"] = "India";
console.log("After adding:", person);

// ✅ Deleting a property
delete person.isStudent;
console.log("After deleting isStudent:", person);

//////////////////////////////////////////////////
// 🧩 Nested Objects
//////////////////////////////////////////////////

const employee = {
  name: "John",
  contact: {
    email: "john@example.com",
    phone: "1234567890"
  },
  skills: ["JS", "Python", "SQL"]
};

console.log("Employee email:", employee.contact.email);
console.log("First skill:", employee.skills[0]);

//////////////////////////////////////////////////
// 🔁 Looping through Objects
//////////////////////////////////////////////////

console.log("Loop with for...in:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//////////////////////////////////////////////////
// 📦 Object Methods (Functions inside object)
//////////////////////////////////////////////////

const user = {
  username: "raj123",
  login() {
    console.log(`${this.username} has logged in.`);
  }
};

user.login();

//////////////////////////////////////////////////
// 🧠 Object Destructuring
//////////////////////////////////////////////////

const student = {
  name: "Sneha",
  age: 21,
  course: "MCA"
};

const { name, age, course } = student;
console.log(`Destructured: ${name}, ${age}, ${course}`);

// ✅ Rename while destructuring
const { name: fullName } = student;
console.log("Renamed variable:", fullName);

//////////////////////////////////////////////////
// ✨ Spread & Rest with Objects
//////////////////////////////////////////////////

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 }; // obj2.b overrides obj1.b
console.log("Merged object:", merged);

// Rest
const { a, ...restProps } = merged;
console.log("a:", a);
console.log("Rest of properties:", restProps);

//////////////////////////////////////////////////
// ❓ Optional Chaining & Nullish Coalescing
//////////////////////////////////////////////////

const profile = {
  user: {
    name: "Raj",
    address: {
      city: "Mumbai"
    }
  }
};

// Optional chaining
console.log("City:", profile.user?.address?.city); // Mumbai
console.log("Pin:", profile.user?.address?.pin ?? "Not available"); // fallback

//////////////////////////////////////////////////
// 📊 Object Utility Methods
//////////////////////////////////////////////////

const example = {
  x: 10,
  y: 20
};

console.log("Keys:", Object.keys(example));       // ["x", "y"]
console.log("Values:", Object.values(example));   // [10, 20]
console.log("Entries:", Object.entries(example)); // [["x", 10], ["y", 20]]

//////////////////////////////////////////////////
// 🧬 Object.freeze() and Object.seal()
//////////////////////////////////////////////////

const frozenObj = Object.freeze({ name: "Frozen" });
// frozenObj.name = "Changed"; // ❌ will not work
console.log("Frozen:", frozenObj);

const sealedObj = Object.seal({ name: "Sealed" });
sealedObj.name = "Updated"; // ✅ allowed
// sealedObj.newProp = "Test"; // ❌ not allowed
console.log("Sealed:", sealedObj);

//////////////////////////////////////////////////
// 💡 Summary (in comments)
//////////////////////////////////////////////////

/*
OBJECT CONCEPTS COVERED:
-------------------------
✔ Object creation
✔ Access/modify/add/delete properties
✔ Nested objects & arrays
✔ for...in loop
✔ Object methods using 'this'
✔ Destructuring (and renaming)
✔ Spread/rest with objects
✔ Optional chaining ?. and ??
✔ Object.keys(), values(), entries()
✔ freeze() and seal()

REMEMBER:
---------
- Use `.` or `[]` to access properties
- Use `Object.freeze()` to make immutable
- Use `Object.seal()` to lock structure
- Use spread (`...`) for copying and merging
*/

//////////////////////////////////////////////////
// ✅ Done! You're now confident with Objects 🔥
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
