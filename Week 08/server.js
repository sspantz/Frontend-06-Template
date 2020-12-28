var http = require("http");
var port = 4000;
http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", error => console.log(error))
      .on("data", chunk => {
        console.log("chunk:", chunk);
        body.push(chunk.toString());
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("OK!");
      });
  })
  .listen(port);
console.log(`Server is running on port ${port}`);
