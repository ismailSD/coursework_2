var http = require('http');
var requests=0;
var podname= process.env.HOSTNAME;
var PORT = process.env.PORT;
var startTime;
var host;
var status;

var handleRequest = function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.writeHead(200);
  response.write("Hello World! | Running on: ");
  response.write(host);
  
  
   console.log("status code" +response.statusCode);

  
  status = response.statusCode;
  
  response.end(" | v=1\n");
  console.log("Running On:" ,host, "| Total Requests:", ++requests,"| App Uptime:", (new Date() - startTime)/1000 , "seconds", "| Log Time:",new Date());
}

var www = http.createServer(handleRequest);

www.listen(PORT,function () {
    startTime = new Date();;
    host = process.env.HOSTNAME;
    console.log (`Hello World Started At: ${startTime} | Running on port: ${PORT}, hostname: ${host}`);
});

