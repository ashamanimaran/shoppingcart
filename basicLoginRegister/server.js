var express=require('express');
var server=express();
var bodyparser=require('body-parser');
server.use(bodyparser.json()); 
var loginModels=require('./dao');
var LoginInfo=loginModels.loginInfo;
var RegisterInfo=loginModels.registerInfo;

server.get("/",function(req,res){
    res.sendFile(__dirname+"/pages/index.html");
   });
server.get("/app.js",function(req,res){
    res.sendFile(__dirname+"/app.js");
});
server.get("/pages/login.html",function(req,res){
    res.sendFile(__dirname+"/pages/login.html");
});
server.get("/pages/welcome.html",function(req,res){
    res.sendFile(__dirname+"/pages/welcome.html");
});
server.get("/pages/error.html",function(req,res){
    res.sendFile(__dirname+"/pages/error.html");
});
server.get("/pages/register.html",function(req,res){
    res.sendFile(__dirname+"/pages/register.html");
});

server.post("/login",function(req,res){
   var user= req.body.user;
   var pwd=req.body.pwd;
   console.log(user+","+pwd);
   LoginInfo.find({"user":user,"pwd":pwd},function(err,result){
       if(err!=null){
           res.status=500;
res.send("database error. check if mongodb server is running");
       }{
           if(result.length==0){
                       res.status(400);
                      res.send('<h1>user not registered</h1>');  
           }else{
                    res.status(200);
                   res.send(result);         
           }

       }
   });
});
server.post("/register",function(req,res){
   var user= req.body.user;
   var pwd=req.body.pwd;
   var firstName= req.body.firstName;
   var lastName=req.body.lastName;
   console.log(user+","+pwd+","+firstName+","+lastName);
   RegisterInfo.find({"user":user},function(err,result){
       if(err!=null){
res.send("database error. check if mongodb server is running");
       }else{
           if(result.length==0){
                      RegisterInfo.create({"user":user,"pwd":pwd,"firstName":firstName,"lastName":lastName},function(err,res){
                       console.log("new user created!")   
                      });
                      res.sendFile(__dirname+"/pages/welcome.html");   
           }else{
                   res.send("please select a different login");        
           }

       }
    
   });
});
server.listen("9999",'localhost');




