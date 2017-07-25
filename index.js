var http = require("http");
http.createServer(function(request, response) {
var file_path = "./index.html";
require("fs").readFile(file_path, "utf-8", function(err, file) {
                    if (err) {
                        response.end(err);
                    } 
                    else {
                        response.end();
                    }
                }); }).listen(8338);
console.log("服务启动...");