// Load the http module to create an http server.
const http = require('http');
const HelloWorld = require('./src/helloworld');

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((request, response) => {
  HelloWorld.greeting(response);
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
process.stdout.write('Server running at http://127.0.0.1:8000/\n');
