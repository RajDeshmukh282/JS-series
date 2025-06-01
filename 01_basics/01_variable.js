const account_id = 23;// This is a constant and cannot be changed
let account_name = "John Doe";// This is a variable that can be changed
var account_balance = 1000.50;// This is a variable that can be changed
account_city = "New York";// This is a variable that can be changed, but it is not declared with let or var
let accountstate; //undefined variable, it can be assigned later
console.log(account_id,account_balance,account_name,account_city,accountstate);// This will print the values of the variables to the console
console.table({account_id, account_name, account_balance, account_city,accountstate});
// This will print the values of the variables in a table format
//dont use var keyword becuase of scope issues, use let or const instead
//const is used for variables that should not change, let is used for variables that can change 
// variable.js
// 📘 Created by: Raj Deshmukh

"use strict"; // Always use strict mode for safer code

//////////////////////////////////////////////////
// 🧠 What is a Variable?
//////////////////////////////////////////////////

// A variable is a named container for storing data values.
// You can declare a variable using: var, let, or const.

//////////////////////////////////////////////////
// 🔄 1. var vs let vs const
//////////////////////////////////////////////////

// 🔸 var
var oldSchool = "This is var";
console.log(oldSchool);

// 🔸 let
let modernWay = "This is let";
modernWay = "You can reassign let";
console.log(modernWay);

// 🔸 const
const fixedValue = "This is const";
// fixedValue = "Trying to change const"; ❌ This would cause an error
console.log(fixedValue);

//////////////////////////////////////////////////
// 📏 2. Scope Differences
//////////////////////////////////////////////////

// var is function-scoped
function testVarScope() {
  if (true) {
    var x = 10;
  }
  console.log("var scope:", x); // ✅ Accessible
}
testVarScope();

// let and const are block-scoped
function testLetConstScope() {
  if (true) {
    let y = 20;
    const z = 30;
    console.log("let inside block:", y);
    console.log("const inside block:", z);
  }
  // console.log(y); ❌ Error: not accessible outside block
}
testLetConstScope();

//////////////////////////////////////////////////
// 🔁 3. Redeclaration & Reassignment
//////////////////////////////////////////////////

var a = 1;
var a = 2; // ✅ allowed with var

let b = 1;
// let b = 2; ❌ Not allowed with let

const c = 1;
// const c = 2; ❌ Not allowed with const
// c = 3;      ❌ Cannot reassign const

//////////////////////////////////////////////////
// ⏫ 4. Hoisting Behavior
//////////////////////////////////////////////////

// var is hoisted (declared at the top, but not initialized)
console.log(hoistedVar); // undefined
var hoistedVar = "I'm hoisted";

// let and const are not hoisted the same way
// console.log(hoistedLet); ❌ ReferenceError
let hoistedLet = "I'm not hoisted safely";

//////////////////////////////////////////////////
// ✅ 5. Naming Rules and Best Practices
//////////////////////////////////////////////////

// ✅ Valid names
let firstName = "Raj";
let $price = 100;
let _private = true;

// ❌ Invalid names
// let 2cool = "No";     // Cannot start with a number
// let full-name = "No"; // Hyphens are not allowed

// ✅ Use camelCase for naming
let userEmail = "raj@example.com";

// ✅ Constants use UPPERCASE by convention
const MAX_USERS = 100;

//////////////////////////////////////////////////
// 🔚 Summary (in comments)
//////////////////////////////////////////////////

/*
var:
- Function-scoped
- Can be redeclared & reassigned
- Gets hoisted (with undefined)

let:
- Block-scoped
- Cannot be redeclared in same scope
- Can be reassigned
- Not hoisted the same way (temporal dead zone)

const:
- Block-scoped
- Cannot be redeclared or reassigned
- Must be initialized

✅ Best Practices:
- Use let for variables that change
- Use const for values that don’t change
- Avoid using var
- Use meaningful, camelCase names
*/

//////////////////////////////////////////////////
// 🎉 Done! You now understand JavaScript variables!
// 📘 Author: Raj Deshmukh
//////////////////////////////////////////////////
