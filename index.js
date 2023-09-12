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

// const app = require("./app");
// console.log(app);
// console.log(app.x);
// console.log(app.y);
// console.log(app.z()); //as z is a function and x and y both are variables

// const arr = [2, 4, 7, 8, 4, 6, 7, 8];
// arr.filter((ele)=>{
// console.log(ele)
// })
// array filteration through the condition
// let res = arr.filter((ele) => {
//   return ele <= 4;
// });
// console.log(res);

// Modules----------->core modules (HTTP, Buffer) , external modules
// core modules --------> Global , Non-Global
// Global ------> Which is no need to import any file
// like console.log
// Non-Global ------> To use which modules we have to import in top of the file
// like - fs module , os module etc

const fs = require("fs");
fs.writeFileSync("hello.txt", "welcome to node"); // use to create a file named hello.txt and text or content as welcome to node

console.log(__dirname); //help to get the directory name- C:\Users\Dell\Documents\nodetut
console.log(__filename); //help to get the file name- C:\Users\Dell\Documents\nodetut\index.js
