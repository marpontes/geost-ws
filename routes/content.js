/* **************************************************************
   GEOST https://github.com/marpontes/geost-ws
   author: @marpontes
   ==============================================================
   
   This app is a web-service layer over the GEOST
   database.
   
   content.js - maps the business layer to the DAO
   
   ************************************************************** */

var BucketsDAO = require('../buckets').BucketsDAO;

function ContentHandler (db) {
    "use strict";
    
    var buckets = new BucketsDAO(db);


   /*
    * getBucket and locks it out
    */
    this.getAndLockBucket = function(req, res, next) {
        "use strict";

        buckets.getAndLockBucket(function(err, bucket) {
            "use strict";

            if (err) return next(err);
            if(!bucket) return res.send("{}");
            return res.send(bucket);
        });
    };
    
    this.getCep = function(req, res, next){
        "use strict";
        
        var cep = req.params.cep;
        
        buckets.getCep(cep,function(err,cep){
            "use strict";
            
            if(err) return next(err);
            if(!cep) return res.send("{}");
            return res.send(cep);
        });
    };

   /*
    * shows out the 404 page
    */
    this.displayPageNotFound = function(req, res, next) {
        "use strict";
        return res.send('Sorry, page not found', 404);
    }

}

module.exports = ContentHandler;
