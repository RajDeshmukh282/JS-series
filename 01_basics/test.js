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
