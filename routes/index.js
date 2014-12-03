/* **************************************************************
   GEOST https://github.com/marpontes/geost-ws
   author: @marpontes
   ==============================================================
   
   This app is a web-service layer over the GEOST
   database.
   
   index.js - maps routes and content handlers
   
   ************************************************************** */

var ContentHandler = require('./content')
  , ErrorHandler = require('./error').errorHandler;

module.exports = exports = function(app, db) {

    var contentHandler = new ContentHandler(db);

   /*
	* NYI - To be implemented
	* Will return information about the
	* given Postal Code
	*/
    //app.get("/get/:code", contentHandler.get);
    
    
    app.get("/getandlockbucket", contentHandler.getAndLockBucket);
    //app.get("/getuf/:uf", contentHandler.getAndLockBucket);
    //app.get("/getcidade/:cidade", contentHandler.getAndLockBucket);
    app.get("/getcep/:cep", contentHandler.getCep);
    
    //app.get("/lockuf/:host", contentHandler.getAndLockBucket);
    //app.get("/lockcidade/:host", contentHandler.getAndLockBucket);
    //app.get("/lockcep/:cep/:host", contentHandler.getAndLockBucket);
    
    
    
    app.get("*", contentHandler.displayPageNotFound);
    

    app.use(ErrorHandler);
    
}
