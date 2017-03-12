import http from 'http';
import HelloWorld from './helloworld';

const SERVER_PORT = 8000;

const server = http.createServer((request, response) => {
  HelloWorld.greeting(response);
});

server.listen(SERVER_PORT);
process.stdout.write(`Server running at http://127.0.0.1:${SERVER_PORT}/\n`);


export default server;
