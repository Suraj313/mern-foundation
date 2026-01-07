// let 
let a = 10;
let b = 20;
let sum = a + b;
console.log("Sum:", sum);

let score = 50;
score = score + 10; // reassignment in let 
console.log("Score:", score);


// const 
const country = "India";
console.log("Country:", country);
// country = "USA"; // Error because we cannot reinitailize in const


const user = {
  name: "Suraj",
  age: 22
};
user.age = 23; // allowed
console.log("User:", user);


const numbers = [1, 2, 3];
numbers.push(4);
console.log("Numbers:", numbers);

//var
if (true) {
  var z = 100;
}
console.log("Var scope:", z); // since var is function scoped we can acess outside scope also


// function 


// 1- function declration
function add(a, b) {
  return a + b;
}
console.log("Add:", add(2, 3));


// 2- function expression
const subtract = function (a, b) {
  return a - b;
};
console.log("Subtract:", subtract(10, 5));


// 3- arrow functions 
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 5));


// 4- callback function
function calculate(a, b, operation) {
  return operation(a, b);
}
console.log(
  "Callback Add:",
  calculate(5, 3, (x, y) => x + y)
);







