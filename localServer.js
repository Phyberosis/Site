const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 12345;

const server = http.createServer((req, res) => {
  let ext, path = '.';
  if (req.url == '/') {
    ext = 'html'
    path += '/index.html'
  } else if (req.url.includes('.js')) {
    ext = 'javascript'
    path += req.url
  } else if (req.url.includes('.css')) {
    ext = 'css'
    path += req.url
  } else if (req.url.includes('favicon.ico')) {
    res.statusCode = 404
    res.end();
    console.log("fav icon? nah dude.")
    return
  } else {
    console.log("hey Tony, something tried to load a file that's not html or js, look in localServer.js");
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/' + ext);

  console.log(req.url);
  console.log(path);
  fs.readFile(path, function (err, html) {
    if (err) {
      throw err;
    }
    res.write(html);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});