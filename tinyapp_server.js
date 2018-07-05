var http = require('http');
var url= require('url');
var fs = require('fs');

http.createServer(
//call back function to customize your request and response.
function (req, res) {

        // parse the url
        var q = url.parse(req.url, true);

        //find the pathname the client requested for
        if(q.pathname == '/') {
            res.write("Hello, welcome to mysite");
            //end the response.
            res.end();
        } else {
                //write the response.
                 //res.write("<HTML><H1>Here is your page.</H1></HTML>");

                 //Read the requested html page from the FS.
                 readHTMLPage(req, res);

            }


    }).listen(3001);



function readHTMLPage(req, res){
        //get the requested url
        var requestedUrl = url.parse(req.url, true);

        //get the path of the file in the file system.
        var filename = "." + requestedUrl.pathname;

        fs.readFile(filename, function(err, data) {
                     if (err) {
                           return res.write("404 Not Found");
                           }
                     res.write(data);
                     return res.end();
        });
}
