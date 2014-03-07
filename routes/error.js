/* **************************************************************
   GEOST https://github.com/marpontes/geost-ws
   author: @marpontes
   ==============================================================
   
   This app is a web-service layer over the GEOST
   database.
   
   error.js - application error handler
   
   ************************************************************** */

exports.errorHandler = function(err, req, res, next) {
    "use strict";
    console.error(err.message);
    console.error(err.stack);
    res.send(500, 'Sorry, there was error!');
}
