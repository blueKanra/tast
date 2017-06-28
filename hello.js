var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Goodbye Cruel World!\n');
}).listen(443,'45.55.14.73' );
console.log('Server running at http://10.134.30.134:443/');
