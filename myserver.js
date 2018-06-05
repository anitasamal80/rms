var http = require('http');
var fs = require('fs');
var url= require('url');
var mysql = require('mysql');
const {parse} = require('querystring');
var contactDB = require('./contactDB')



http.createServer(function (req, res) {

  var q = url.parse(req.url, true);

  if(q.pathname == "/addContact" && req.method === 'POST')
  {

    // step -1. retrieve request data

      let body = '';
      req.on('data', chunk => {
          body += chunk.toString();
      });
      req.on('end', () => {
            contactForm  = parse(body);
            //console.log(contactForm);
            contactDB.addcontact(contactForm);


      });

   //step -2. create a contact object

   //step -3. set the fields of the contact object using request data.



   res.writeHead(200, {'Content-Type': 'text/html'});
   return res.end("Fantastic, you are a step close to success !");
  }

  var filename = "." + q.pathname;

    fs.readFile(filename, function(err, data) {
    if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
          }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
}).listen(3000);