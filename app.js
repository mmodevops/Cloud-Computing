const http = require('http');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
  //Thiet lap kieu tra ve cua response : HTML 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<h1 style='color:green;' >1644- Cloud Computing</h1>");
  res.write("<h2>Fall 2022</h2>");
  res.write("<h3 style = 'text-decoration:underline'>University of Greenwich (Vietnam)</h3>");
  res.end('This is tutorial about Nodejs');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

