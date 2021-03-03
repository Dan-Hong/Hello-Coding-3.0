const http = require("http");
const fs = require("fs");
const allFiles = fs.readdirSync("./", {
  withFileTypes: true
});
const htmlFiles = allFiles
  .map((entry) => {
    console.log(entry);
    if (entry.name === "home.html") {
      return "";
    }
    else {
      return entry.name.slice(0, -5);
    };
  });
const server = http.createServer((req, res) => {
  console.log(req.url);
  const requestURL = req.url.slice(1);
  if (htmlFiles.includes(requestURL)) {
    if (requestURL === "") {
      const fileResponse = fs.readFileSync("./home.html", "utf8");
      res.end(fileResponse);
    }
    else {
      const fileResponse = fs.readFileSync("./" + requestURL + ".html");
      res.end(fileResponse);
    }
  }
  else {
    const fileResponse = fs.readFileSync("./404ErrorPage.html", "utf8");
    res.end(fileResponse);
  }
});

server.listen(3000, () => {
  console.log("You connected");
});