// to declare our application variable by importing express (which is itself a function)
const app = require("express")();
// port: 
const PORT = 8080;
//fire the api by making it listen to the PORT
app.listen(PORT, ()=>console.log(`it's running on the local host: http://localhost:${PORT}`))