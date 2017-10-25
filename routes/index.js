var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.post('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    var temp=[];
    switch(req.body.abc){
        case "1":
            temp=["关某","女","20"]
            break;
        case "2":
            temp=["李某","男","20"]
            break;
    }
    res.send({"name":temp})
});

module.exports = router;
