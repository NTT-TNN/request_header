var express = require('express');
var app = express();
var port=process.env.PORT||3000;

app.set('port', (8080));

app.get('/', function(req, res) {
    if (req.url === '/favicon.ico') return;
    res.json({
        ipaddress: req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"]
    });
});

app.listen(port, function() {
    console.log('Node app is running on port', app.get('port'));
});
