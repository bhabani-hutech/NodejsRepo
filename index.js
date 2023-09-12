const http = require("http");
const fs = require("fs");
// file system module
const path = require("path");
// path module
const data = require("./data");
// Create a server with header and api body and port 5000 getting a static json code
http
  .createServer((req, resp) => {
    resp.writeHead(200, {
      "Content-Type": "application/json",
    });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5000);

//   input from command line

// console.log(process);
// this process having the whole data of the project
// console.log(process.argv);
// argv means argument vector

// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);
// here input[2] have file name and input[3] have text of the file
// Through input[2] and input[3] we are taking a data as a input from user

// if (input[2] === "add") {
//   fs.writeFileSync(input[3], input[4]);
//   // here input[3] have file name and input[4] have text of the file
// } else if (input[2] === "remove") {
//   fs.unlinkSync(input[3]);
//   // here input[3] remove the file
// } else {
//   console.log("invalid input");
// }
// node .\index.js add demo.txt "This is a dummy text file"
// node .\index.js remove demo.txt
