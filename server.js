var http = require('http');
var f= require('fs');

function handler(request, response){
  var endpoint = request.url;
  console.log(endpoint);
  var method = request.method;
  console.log(method);
  response.writeHead(200, {"Content-Type" : "text/html"});
  if (endpoint === '/node') {
    response.write('girls');
  } else if (endpoint === '/girls') {
    response.write('node?');
  }
  response.end();
}

var server = http.createServer(handler);
server.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
