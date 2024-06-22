var http = require('http');

http.createServer(function (req, res) {
  res.write("W tyler");
  res.end();
}).listen(8080);
