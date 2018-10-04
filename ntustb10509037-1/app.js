
var port = process.env.VCAP_APP_PORT || 5000;

//Express Web Framework, and create a new express server
var express = require('express'),
app = express();
var path = require('path');
var bodyParser = require('body-parser');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// In case the caller calls GET to the root '/', return 'views/index.html' file.
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// In case the caller calls POST to /author, return 'Author name'
app.post('/author', function(req, res) {
    res.send('Author name');
});

// start server on the specified port and binding host
app.listen(port, function(req, res){
    console.log(`Server started on port` + port);
});