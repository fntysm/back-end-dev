const { mongoose } = require("mongoose");
const productschema = mongoose.Schema({
      title : {
            type: String,
            require: true
      },
      description : {
            type: String,
            require: true
      }
})

module.exports=mongoose.model('Product',productschema)