var express = require('express');
var router = express.Router();
var mysql = require('./mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/getData', function(req, res){
    var list= [];
    var data = {
        tList: []
    };
    var getList  = "select * from test";

    mysql.fetchData(function(err,results){
        if(results.length > 0) {
            var i = 0;
            while(i<results.length) {
                var tData = {
                    id: results[i].id
                }
                list.push(tData);
                i++;
            }
            data.tList = list;
            console.log("Data from node ---------------",data);
            res.send(data);
        }
    },getList);
});

module.exports = router;
