// author.js - Author route module
var express = require('express');
var router = express.Router();
var articleServices = require('../services/articleServices');


router.post('/', function (req, res) {

    articleServices.personalityAnalyzer(req, function (err, response) {
        // The error will be the first argument of the callback
        if (err) {
        } else {
            res.setHeader('Content-Type','application/json');
            res.send(response);
        }
    });

});

module.exports = router;