/* **************************************************************
   GEOST https://github.com/marpontes/geost-ws
   author: @marpontes
   ==============================================================
   
   This app is a web-service layer over the GEOST
   database.
   
   buckets.js - defins de DAO the buckets collection
   
   ************************************************************** */

function BucketsDAO(db) {
    "use strict";

    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof BucketsDAO)) {
        console.log('Warning: PostsDAO constructor called without "new" operator');
        return new BucketsDAO(db);
    }

    var buckets = db.collection("buckets");
    var ceps = db.collection("ceps");

    this.getAndLockBucket = function(callback) {
        "use strict";

		buckets.findAndModify(
		  {locked: false}, 			// query
		  [['bucket_id','asc']],  	// sort order
		  {$set: {locked: true}}, 	// replacement
		  {}, // options
		  function(err, bucket) {
			  if (err){
				return callback(err, null);
			  }else{
				callback(err, bucket);
			  }
		});

        
    };
    
    this.getCep = function(cepQuery,callback) {
        "use strict";
		ceps.findOne(
		  {"_id" :  cepQuery}, 
		  function(err, cep) {
              console.log(cep);
              console.log(cepQuery);
			  if (err){
				return callback(err, null);
			  }else{
				callback(err, cep);
			  }
		});

        
    };
    
    


}

module.exports.BucketsDAO = BucketsDAO;
