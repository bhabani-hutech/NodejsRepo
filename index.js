const http = require("http");
// Create a server with header and api body and port 5000 getting a static json code
http
  .createServer((req, resp) => {
    resp.writeHead(200, {
      "Content-Type": "application/json",
    });
    resp.write(
      JSON.stringify({ name: "Bhabani", age: 25, email: "bhabani@gmail.com" })
    );
    resp.end();
  })
  .listen(5000);
