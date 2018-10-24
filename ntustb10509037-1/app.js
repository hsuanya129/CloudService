
var port = process.env.VCAP_APP_PORT || 5000;

//Express Web Framework, and create a new express server
var express = require('express'),
app = express();
var path = require('path');
var bodyParser = require('body-parser');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


//Routes modules
var index = require('./routes');
var author = require('./routes/author');

//In case the caller access any URI under the root /, call index route
app.use('/', index);
//In case the caller access any URI under /author, call author route
app.use('/author', author);

// start server on the specified port and binding host
app.listen(port, function(req, res){
    console.log(`Server started on port` + port);
});