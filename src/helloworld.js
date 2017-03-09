module.exports =
  class HelloWorld {
    static greeting(response) {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Hello world!!\n');
    }
  };
