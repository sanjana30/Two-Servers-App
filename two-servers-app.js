var http = require("http");

//listen to Port=8080
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response){
    response.end("\nHey! Good Morning. I like the fact that you are so dedicated to your work.\nKeep it up!!!" +request.url);
}

function handleMeanRequest(request, response){
    response.end(`\nYou came back? When will you stop annoying me!!!` +request.url);
}

//make a server; whenever a request comes in, handle it using handleRequest()
var server = http.createServer(handleRequest);
var serverMean = http.createServer(handleMeanRequest);

//server actually start listening to port using listen(Port, callback-function)
server.listen(PORT1, function(){
    console.log(`Server listening on http://localhost:${PORT1}`);
    
})

serverMean.listen(PORT2, function(){
    console.log(`Server listening on http://localhost:${PORT2}`);
    
})