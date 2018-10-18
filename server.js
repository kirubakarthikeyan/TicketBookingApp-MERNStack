var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path = require("path");
var key = require("./config/keys");

//REQUIRE ROUTES
var adminRoute = require("./routes/adminRoutes") 

// FOR PRODUCTION BUILD 
if(process.env.NODE_ENV==="production")
{
    app.use(express.static('book/build'));
    app.get("/",(req,res)=>
    {
    res.sendFile(path.resolve(__dirname,'book','build','index.html'));
    
    })
  
    


}

//CONNECT TO DB

mongoose.connect(key.mongoUri ,{ useNewUrlParser: true },(err)=>
{
    if(!err)
    console.log("CONNECTED TO DB");
    else
    console.log(err);
})
 

//ROUTE HANDLERS
app.use(adminRoute)


//LISTEN TO 9090

app.listen(process.env.PORT || 9090,(err)=>
{
if(!err)
{
    console.log("Server started successfully");   
}
else{
    throw err;
}

})