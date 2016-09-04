var mongoose = require('mongoose');
    var db = mongoose.connect('mongodb://localhost/bookshop');
    var loginInfoSchema = new mongoose.Schema({
    "user" : String,
    "pwd" : String
     });
    var registerInfoSchema = new mongoose.Schema({
    "user" : String,
    "pwd" : String,
    "firstName" : String,
    "lastName" : String
    });
  /*
  When no collection argument is passed, Mongoose produces a collection 
  name by passing the model name to the utils.toCollectionName method. 
  This method pluralizes the name. If you don't like this behavior, 
  either pass a collection name or set your schemas collection name option.
  */ 
    var loginInfo=mongoose.model('loginInfo', loginInfoSchema,'logins');
    var registerInfo=mongoose.model('registerInfo', registerInfoSchema,'logins');
 
   module.exports={
       loginInfo:loginInfo,
       registerInfo:registerInfo 
   };
