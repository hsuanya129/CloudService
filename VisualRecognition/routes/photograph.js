
 var express = require('express');
 var router = express.Router();
 var visualRecognition = require('../services/vrService');


//write the post function here, get the information from index.html post, then connect the 
//information to vrService, call the vrService function to recognize the photo 

router.post('/', function (req, res) {

    visualRecognition.visualRecognizer(req, function (err, response) {
        if (err) {
        } else {
            res.setHeader('Content-Type','application/json');
            res.send(response);
        }
    });

});


module.exports = router;