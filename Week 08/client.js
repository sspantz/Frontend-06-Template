const net = require("net");
class Request {
  constructor(options) {
    this.method = options.method || "GET";
    this.host = options.host;
    this.port = options.port || 80;
    this.path = options.path || "/";
    this.body = options.body || {};
    this.headers = options.headers || {};
    if (!this.headers["Content-Type"]) {
      this.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    if (this.headers["Content-Type"] === "application/json") {
      this.bodyText = JSON.stringify(this.body);
    } else if (
      this.headers["Content-Type"] === "application/x-www-form-urlencoded"
    ) {
      this.bodyText = Object.keys(this.body)
        .map(key => `${key}=${encodeURIComponent(this.body[key])}`)
        .join("&");
    }
    this.headers["Content-Length"] = this.bodyText.length;
  }

  send(connection) {
    return new Promise((resovle, reject) => {
      const parser = new ResponseParser();
      if (connection) {
        connection.write(this.toString());
      } else {
        connection = net.createConnection(
          {
            host: this.host,
            port: this.port,
          },
          () => {
            console.log(this.toString());
            connection.write(this.toString());
          }
        );
      }
      connection.on("data", data => {
        console.log("data:", data.toString());
        parser.receive(data.toString());
        if (parser.isFinised) {
          resolve(parse.response);
          connection.end();
        }
      });
      connection.on("error", error => {
        console.error(error);
        reject(error);
        connection.end();
      });

      resovle();
    });
  }

  toString() {
    return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers)
  .map(k => `${k}: ${this.headers[k]}`)
  .join("\r\n")}\r
\r
${this.bodyText}`;
  }
}

class ResponseParser {
  constructor() {}
  receive(string) {
    for (let i = 0; i < string.length; i++) {
      this.receiveChar(string.charAt(i));
    }
  }
  receiveChar(c) {}
}
void (async function () {
  let request = new Request({
    method: "POST",
    host: "127.0.0.1",
    port: 4000,
    path: "/",
    headers: {
      ["X-Foo2"]: "customed",
    },
    body: {
      name: "sspantz",
    },
  });

  let response = await request.send();

  console.log(response);
})();
