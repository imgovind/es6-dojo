/*jshint esversion: 6 */

// 1
console.log("a %s", a);
var a = 20;

// 2
// NO HOISTING
// console.log(a);
// let a = 10;

// 3
let b = 10;
console.log("b %s", b);

// 4
let c;
console.log("c %s", c);
c = 20;
console.log("c %s", c);

// 5
let d = 12;
{
  let d = 2000;
  console.log("d %s", d);
}
console.log("d %s", d);

// 6
// {
//   let e = 2000;
// }
// console.log("e %s",e);

// 7
function updateF() {
  f = 12;
}
let f = null;
updateF();
console.log("f %s", f);

// 8
let g = 42;
for (let g = 0; g < 10; g++) {}
console.log("g %s", g);

// 9
let updateFunctions = [];
for (var i = 0; i < 2; i++) {
  updateFunctions[i] = function () { return i; };
}
console.log("var Output %s", updateFunctions[0]());

// 10
updateFunctions = [];
for (let i = 0; i < 2; i++) {
  updateFunctions[i] = function () { return i; };
}
console.log("let Output %s", updateFunctions[1]());

// 11
const MARKUP_PCT = 100;
console.log(MARKUP_PCT);

// 12
// const MARKUP_PCT;
// console.log(MARKUP_PCT);

// 13
// const MARKUP_PCT2 = 100;
// MARKUP_PCT2 = 10;
// console.log(MARKUP_PCT2);

// 14
const MARKUP_PCT3 = 100;
{
  const MARKUP_PCT3 = 10;
}
console.log(MARKUP_PCT3);
