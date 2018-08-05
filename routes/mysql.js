var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//Put your mysql configuration settings - user, password, database and port
function getConnection(){
    var connectionPool = mysql.createPool({
        connectionLimit : 500,
        host     : 'sql3.freemysqlhosting.net',
        user     : 'sql3250583',
        password : 'ij9qC9qTnu',
        database : 'sql3250583',
        port     : 3306
    });
    return connectionPool;
}

function fetchData(callback,sqlQuery){

    console.log("\nSQL Query::"+sqlQuery);

    var pool = getConnection();

    pool.getConnection(function(err, connection){
        if(err){
            console.log("ERROR: "+err.message);
            return;
        }
        connection.query(sqlQuery,function(error, results, fields) {
            if (error) {
                console.log("ERROR: " + error.message);
            }
            else{
                console.log("DB results : ",results);
            }
            callback(err, results);
            console.log("\nConnection closed..");
        });

    });
}

exports.fetchData=fetchData;