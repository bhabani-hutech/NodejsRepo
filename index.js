const http = require("http");
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
