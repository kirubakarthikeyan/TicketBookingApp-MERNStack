
var mongoose = require("mongoose");

var rowSchema = new mongoose.Schema({
    
    rowAlphabet:String,
    number:Number,
    seats:[{type:mongoose.Schema.Types.ObjectId,ref:"seats"}]

})



module.exports = mongoose.model("row",rowSchema);


