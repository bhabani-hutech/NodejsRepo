// const app = require("./app");
// const fs = require("fs");
// const colors = require("colors");

// console.log("hello".red);
// console.log("Packjson".bgBlue);
// console.log("welcome nodemon");
// fs.writeFileSync("demo.txt", "This is for testing only");
// console.log(__dirname);
// console.log(__filename);
// console.log(app.x);
// console.log(app.z());

// create a server
// a simple api with get api data
// const http = require("http");
// const apiData = require("./apiData");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-Type": "application/json" });
//     resp.write(JSON.stringify(apiData));
//     resp.end();
//   })
//   .listen(5000);

// take the input from command line
// console.log(process.argv);
// console.log(process.argv[4]);

// condition for create or remove a file inside the root folder

// const fs = require("fs");
// const input = process.argv;
// // console.log(input);
// if (input[2] === "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] === "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("invalid output");
// }

const path = require("path");
const fs = require("fs");
const { isUtf8 } = require("buffer");
const dirpath = path.join(__dirname, "CRUD");
const filePath = `${dirpath}/demo.txt`;
// console.log(dirpath);
// need to create a file inside parent folder we will use path module

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     dirpath + "/dummy" + i + ".txt",
//     `Loop use for create the file of dummy${i}`
//   );
// }

// need to read a file inside parent folder

// fs.readdir(dirpath, (err, dataFiles) => {
//   console.log(dataFiles);
//   dataFiles.forEach((item) => {
//     console.log(item);
//   });
// });

// CRUD Operation
// Create
// fs.writeFileSync(filePath, "This is use for Crud operation");

// Read a file
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

// Update file
// fs.appendFile(filePath, " Now update function is working", (err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

// Rename a file name
// fs.rename(filePath, `${dirpath}/dummy.txt`, (err) => {
//   if (!err) {
//     console.log("file name updated");
//   }
// });

// Delete a file
// fs.unlinkSync(`${dirpath}/dummy.txt`)
