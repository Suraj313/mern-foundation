// hoisting
console.log(a);   // undefined
var a = 10;
console.log(a);

// console.log(b); // ReferenceError due to tdz
let b = 20;
console.log(b);

// console.log(c); // ReferenceError due to tdz
const c = 30;
console.log(c);


// function declaration hoisting 
sayHello();

function sayHello() {
  console.log("Hello from function");
}

//Function expression hoisting ( it is trated as variable)
// sayHi(); // TypeError / ReferenceError
var sayHi = function () {
  console.log("Hi from function expression");
};
sayHi();


// closure 
// example 1 
// function x() {
//   var a = 7;
//     function y() {
//       console.log(a);
//     }
//     y();
// }
// x();  


// example 2
function print() {
  var x = 9;
  var b = function y() {
          console.log(x);
          }
    b();
}
print();