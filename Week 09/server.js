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
      response.end(
        `<html lang="en"><head><style>#myid {width: 100px;height: 100px;background-color: #ff5000;}.myclass {border: 1px solid green;}</style></head><body><div id="myid" class="myclass">123</div></body></html>`
      );
    });
});
server.listen(port, () => console.log(`Server is listening on port ${port}!`));
