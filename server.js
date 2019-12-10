var http = require('http');
var requests=0;
var podname= process.env.HOSTNAME;
var PORT = process.env.PORT;
var startTime;
var host;

var handleRequest = function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.writeHead(200);
  response.write("Hello World! | Running on: ");
  response.write(host);
  response.end(" | v=1\n");
  console.log("Running On:" ,host, "| Total Requests:", ++requests,"| App Uptime:", (new Date() - startTime)/1000 , "seconds", "| Log Time:",new Date());
}

var www = http.createServer(handleRequest);

www.listen(PORT,function () {
    startTime = new Date();;
    host = process.env.HOSTNAME;
    console.log (`Hello World Started At: ${startTime} | Running on port: ${PORT}, hostname: ${host}`);
    console.log("exiting application..."); 
    process.exit(0);
});

