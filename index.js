//  run code without nodemon = node ./index.js

// All basics of js

// console.log("sub");
// var a = 20;
// var b = 30;
// var c = 40;
// console.log(a + b + c);

// if (a === 20) {
//   console.log("matched");
// }
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// const arr = [2, 4, 7, 8, 4, 6, 7, 8];
// console.log(arr);
// console.log(arr[4]);

// Import function and variables from another file

const app = require("./app");
console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z()); //as z is a function and x and y both are variables

const arr = [2, 4, 7, 8, 4, 6, 7, 8];
// arr.filter((ele)=>{
// console.log(ele)
// })
// array filteration through the condition
let res = arr.filter((ele) => {
  return ele <= 4;
});
console.log(res);
