/* **************************************************************
   GEOST https://github.com/marpontes/geost-ws
   author: @marpontes
   ==============================================================
   
   This app is a web-service layer over the GEOST
   database.
   
   app.js - connects to the MongoDB database and starts the
   application, defining the routes
   
   ************************************************************** */

var express = require('express'),
    app = express(),
    MongoClient = require('mongodb').MongoClient,
    routes = require('./routes');
    
var mongoUrl = "localhost";
var mongoPort = "27017";
var mongoDb = "cepgeo";
var mongoCol = "buckets"

MongoClient.connect('mongodb://'+mongoUrl+':'+mongoPort+'/'+mongoDb, function(err, db) {

    if(err) throw err;

    routes(app, db);

    app.listen(8080);
    
    console.log('Express server started on port 8080');
    
});
