// objectInDepth.js
// 📘 Author: Raj Deshmukh

"use strict";

//////////////////////////////////////////////////
// 🧠 JavaScript Objects - In Depth
//////////////////////////////////////////////////

// ✅ Object with various types of keys
const person = {
  name: "Raj",
  age: 25,
  "home city": "Pune",        // space in key
  100: "Numeric key",
};

console.log(person["home city"]);
console.log(person[100]);

//////////////////////////////////////////////////
// 🔑 Property Descriptors
//////////////////////////////////////////////////

const user = {};
Object.defineProperty(user, "username", {
  value: "raj123",
  writable: false,
  enumerable: true,
  configurable: false
});

console.log("Username:", user.username);
// user.username = "hacked"; // ❌ won't change due to writable: false

console.log("Keys:", Object.keys(user)); // visible because enumerable: true

//////////////////////////////////////////////////
// 🧬 Inheritance with Prototypes
//////////////////////////////////////////////////

const basePerson = {
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

const employee = Object.create(basePerson);
employee.name = "Raj Deshmukh";
employee.role = "Developer";

employee.greet(); // Uses method from prototype

console.log("Prototype of employee:", Object.getPrototypeOf(employee));

//////////////////////////////////////////////////
// 🌀 Constructor Function & new Keyword
//////////////////////////////////////////////////

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.drive = function () {
  console.log(`${this.brand} ${this.model} is driving.`);
};

const car1 = new Car("Tata", "Nexon");
car1.drive();

//////////////////////////////////////////////////
// 🧪 Factory Function (vs Constructor)
//////////////////////////////////////////////////

function createUser(name, isAdmin = false) {
  return {
    name,
    isAdmin,
    login() {
      console.log(`${name} has logged in`);
    }
  };
}

const admin = createUser("Admin", true);
admin.login();

//////////////////////////////////////////////////
// 🔁 this, call, apply, bind
//////////////////////////////////////////////////

const account = {
  name: "Raj",
  show() {
    console.log("Account owner:", this.name);
  }
};

const anotherAccount = { name: "Sneha" };

account.show();                   // Raj
account.show.call(anotherAccount);  // Sneha
account.show.apply(anotherAccount); // Sneha
const bound = account.show.bind(anotherAccount);
bound(); // Sneha

//////////////////////////////////////////////////
// 🔒 Symbols as Object Keys
//////////////////////////////////////////////////

const symKey = Symbol("id");
const symUser = {
  [symKey]: 123,
  name: "Raj"
};

console.log("Symbol property:", symUser[symKey]);

//////////////////////////////////////////////////
// 📦 JSON vs Object
//////////////////////////////////////////////////

const jsObj = {
  name: "Raj",
  city: "Pune",
  greet() { console.log("Hi"); } // ❌ not supported in JSON
};

const jsonStr = JSON.stringify(jsObj);
console.log("JSON string:", jsonStr);

const parsed = JSON.parse(jsonStr);
console.log("Parsed object:", parsed);

//////////////////////////////////////////////////
// 🧼 Deep Cloning Object (⚠️ Limitations)
//////////////////////////////////////////////////

const deepObj = {
  name: "Raj",
  address: {
    city: "Pune"
  }
};

// Shallow copy
const shallowCopy = { ...deepObj };
shallowCopy.address.city = "Mumbai"; // affects original

console.log("Original after shallow copy:", deepObj);

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(deepObj));
deepCopy.address.city = "Nagpur";

console.log("Original after deep copy:", deepObj);
console.log("Deep Copy:", deepCopy);

//////////////////////////////////////////////////
// 🛠 Object Class Methods
//////////////////////////////////////////////////

const obj = { a: 1, b: 2 };

console.log("Keys:", Object.keys(obj));
console.log("Values:", Object.values(obj));
console.log("Entries:", Object.entries(obj));

console.log("From entries:", Object.fromEntries([
  ["x", 10],
  ["y", 20]
]));

//////////////////////////////////////////////////
// 📌 Summary
//////////////////////////////////////////////////

/*
OBJECTS IN DEPTH:
------------------
✔ Object.create() → inheritance
✔ defineProperty() → custom descriptors
✔ Prototype → inheritance chain
✔ this, call(), apply(), bind()
✔ Constructor function vs Factory function
✔ Symbol → hidden property keys
✔ JSON.stringify() vs normal objects
✔ Deep cloning using JSON
✔ Object.keys(), values(), entries(), fromEntries()

IMPORTANT:
----------
- Constructor uses `new`, factory does not.
- Symbols are not enumerable.
- Descriptors control how properties behave.
- Avoid shallow copy for nested data.

*/

//////////////////////////////////////////////////
// ✅ You mastered object internals! 💪
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
