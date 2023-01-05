const { mongoose } = require("mongoose");
const userschema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        min: 6
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    }
})
module.exports = mongoose.model('User',userschema)
