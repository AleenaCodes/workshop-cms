var http = require('http');
var fs = require('fs');

var server = http.createServer(handler);
server.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

function handler(request, response){
  var endpoint = request.url;
  console.log(endpoint);
  var method = request.method;
  console.log(method);
  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type" : "text/html"});
    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) {
        console.log(error);
        return;
      }

      response.end(file);
    });
  }
   else if (endpoint === '/node') {
     response.write('girls');
  } else if (endpoint === '/girls') {
     response.write('node?');
  } else {
    var extension = endpoint.split('.');
    var ext = extension[1];
    response.writeHead(200, {"Content-Type" : "text/"+ ext});
    fs.readFile(__dirname + '/public' + endpoint, function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  }
}
