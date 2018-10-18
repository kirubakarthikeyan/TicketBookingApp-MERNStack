var mongoose = require("mongoose");

var screenSchema = new mongoose.Schema({


name:{unique:true,type:String},
image:String,
row:[{type:mongoose.Schema.Types.ObjectId,ref:"row"}]
  
});



module.exports = mongoose.model("screens",screenSchema);
