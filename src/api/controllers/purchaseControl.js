const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const User = require("../modules/purchase")
const registerHandler = async(req,res)=>{
    const {newUserName,email, password} = req.body
    if(!newUserName||!email||!password){res.status(400).json({message: "fields not entirely provided"})}
    try{
    const newUserAuth = await User.findOne({email})
    if(newUserAuth){
        return res.status(400).send("already existant e-mail address")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password,salt);
    const newUser = new User({
        newUserName, email, password: hash
    })
    const savedNewUser = await newUser.save()
    res.status(200).send("WELCOME TO OUR PLATFORM")
    }catch(error){
        res.status(500).send(`the result of the operation: ${error.message}`)
    }
}
const loginHandler = async(req,res)=>{
    const {email, password} = req.body
    if(!email||!password){res.status(400).json({message: "fields not entirely provided"})}
    try{
        const oldUser = await User.findOne({email})
        // verify if a user exists with this e-mail
        if(!oldUser){
           return res.status(400).send("this user doesnt exist");
        }
        const correctPassword = await bcrypt.compare(password,oldUser.password)
        if(!correctPassword){
           return res.status(400).send("incorrect password");
        }
        // the auth token and its expiration 
        const token = await jwt.sign({id: oldUser._id}, process.env.JWTOKEN)
        res.status(200).json({token, oldUsersAuth:{id : oldUser._id, username:oldUser.name ,email: oldUser.email}})
    }catch(error){
        res.status(500).send(`the result of the operation: ${error.message}`)
    }
}
module.exports={loginHandler,registerHandler}
