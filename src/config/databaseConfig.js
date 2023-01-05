// Mongoose is a JavaScript object-oriented programming library that creates a connection 
// between MongoDB and the Node.js JavaScript runtime environment.
const  mongoose  = require("mongoose");
DBURL="mongodb+srv://zaineb:gdgwtm@cluster0.quwroee.mongodb.net"
const connectDB = () => { 
   mongoose.connect(DBURL).then(()=>{console.log("MongoDB data base successfully connected")}
   ).catch(e=>{console.log(`operation process gone wrong, ${e.message}, check this now`)})
}
module.exports=connectDB