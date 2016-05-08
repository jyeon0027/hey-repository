var express = require('express');
var mysql = require('mysql');
var router =express.Router();
var connection = mysql.createConnection({
                'host' : '',
                'user' : '', 'password' : '', 'database' : '',

});

router.post('/', function(req, res, next) {
       
});


module.exports = router;