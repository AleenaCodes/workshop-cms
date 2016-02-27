var http = require('http');
var f= require('fs');

function handler(request, response){

  if (url.length === "/") {
    response.writeHead(200, {"Content-Type" : "text/html"});

    fs.readFile(__dirname + '/public/index.html',function(error, file) {
      if (error) {
        console.log(error);
        return;
      }

      response.end(file);
    });
  }
}

var server = http.createServer(handler);
server.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
