const router = require("express").Router();
const {loginHandler, registerHandler} = require("../controllers/purchaseControl")
router.post('/login',loginHandler)
router.post('/register',registerHandler)
module.exports=router
