var http = require('http');
var util = require('util');

//grab cf environment
var vcap_app = JSON.parse(process.env.VCAP_APPLICATION);
console.log("env.VCAP_APPLICATION: " + util.inspect(vcap_app));

var instance = {};
instance["host"] = vcap_app["host"];
instance["port"] = vcap_app["port"];
console.log("app.js: instance: " + util.inspect(instance));

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello !! This is node sample application.\n');
}).listen(instance["port"]);
console.log('Server running');
