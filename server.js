//这个是Node.js应用的入口文件，在app.conf里面有设置
//百度BAE对监听的端口有规定，必须是１８０８０
var http = require('http');
var port = 18080;
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');
}).listen(port);
