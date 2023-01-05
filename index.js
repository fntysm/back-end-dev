//require('dotenv').config;
// to declare our application variable by importing express (which is itself a function)
const app = require("express")();
const PORT=8080;
// to use external middlewares
//app.use(express.json())
// define the router ()
app.get('/',(req,res)=>{res.status(200).json({situation:'works',message:'gdg && wtm'})})
//fire the api by nmaking it listen to the PORT
app.listen(PORT, ()=>console.log(`it's running on the local host: http://localhost:${PORT}`))