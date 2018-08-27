var http = require("http");

var PORT = 7000;

function handleRequest(req, res){
  var path = req.url
  switch(path){
    case "/":
      displayRoot(path, req, res);
      break;
    case "/portfolio":
      displayPortfolio(path, req, res);
      break
    default:
      display404(path, req, res);
      break;
  }
  //response.end(`I SAY SOMETHING NICE, AS HUMANS.. I MEAN WE.... OFTEN DO`);
}

function displayRoot(url, req, res){
  var myHTML =
  `
    <html>
      <body>
        <h1>Home Page</h1>
        <a href="/portfolio">Portfolio</a>
      </body>
    </html>
  `
  res.writeHead(200, { "Content-Type": "text/html"})
  res.end(myHTML);
}

function displayPortfolio(url, req, res){
  var myHTML =
  `
    <html>
      <body>
        <h1>My Portfolio Page</h1>
        <a href="/">Home</a>
      </body>
    </html>
  `
  res.writeHead(200, { "Content-Type": "text/html"})
  res.end(myHTML);
}

function display404(url, req, res){
  var myHTML =
  `
    <html>
      <body>
        <h1>PAY NO ATTENTION TO THE MAN BEHIND THE CURTAIN (Page: ${url} not found)</h1>
      </body>
    </html>
  `
  res.writeHead(404, { "Content-Type": "text/html"})
  res.end(myHTML);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log(`Server listening on http://localhost:${PORT}`);
})