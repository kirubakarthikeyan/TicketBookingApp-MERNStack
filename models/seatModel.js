
var mongoose = require("mongoose");

var seatSchema = new mongoose.Schema({
    
    seatNumber:String,
    reserved:Boolean
})



module.exports = mongoose.model("seats",seatSchema);


