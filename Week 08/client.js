const net = require("net");

class Request {
  constructor(options) {
    const { method, host, port, path, headers, body } = options;
    this.method = method || "GET";
    this.host = host || 80;
    this.path = path || "/";
    this.headers = headers || {};
    this.bodyText = "";

    if (!this.headers["Content-Type"]) {
      this.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    if (!this.headers["Content-Type"] === "application/json") {
      this.bodyText = JSON.stringify(this.body);
    } else if (
      this.headers["Content-Type"] === "application/x-www-form-urlencoded"
    ) {
      this.bodyText = Object.keys(this.body)
        .map(key => `${key}=${encodeURIComponent(this.body[key])}`)
        .join("&");
    }

    this.headers["Content-length"] = this.bodyText.length;
  }

  send(connection) {
    return new Promise((resolve, reject) => {
      const parser = new ResponsePaser();
      resolve("OK");
    });
  }
}

class ResponsePaser {
  constructor() {}

  receive(string) {
    for (let i = 0; i < string.length; i++) {
      this.receiveChar(string.charAt(i));
    }
  }

  receiveChar(char) {}
}
void (async function () {
  let request = new Request({
    method: "POST",
    host: "127.0.0.1",
    port: "4000",
    path: "/",
    headers: {
      ["X-Bar3"]: "customed",
    },
    body: {
      name: "sspantz",
      love: "programming",
    },
  });

  let response = await request.send();

  console.log(response);
})();
