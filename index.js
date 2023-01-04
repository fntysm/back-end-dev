require('dotenv').config;
// to declare our application variable by importing express (which is itself a function)
const app = require("express")();

// to use external middlewares
app.use(express.json())
// define the router ()
app.get('/',(req,res)=>{res.json({message:'welcome to GDGs workshop'})})
//fire the api by nmaking it listen to the PORT
app.listen(process.env.PORT||8080, ()=>console.log(`it's running on the local host: http://localhost:${PORT}`))