const http = require('http');

const port = 4000;

const server = http.createServer((req, res) => {

  //res.writeHead(200, {'Content-Type': 'text/plain'});
  
  res.end('Kautilya Tiwari');
  
  //console.log('Kautilya Tiwari');
});

server.listen(port, () => {
  console.log(`Server running at http://:${port}/`);
});