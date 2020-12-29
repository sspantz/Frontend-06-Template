var http = require("http");
var port = 4000;
const server = http.createServer((request, response) => {
  let body = [];
  request
    .on("error", error => console.log(error))
    .on("data", chunk => {
      console.log("chunk:", chunk);
      body.push(Buffer.from(chunk));
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log("body:", body);
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("OK!");
    });
});
server.listen(port, () => console.log(`Server is running on port ${port}!`));
