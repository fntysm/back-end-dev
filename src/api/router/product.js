const router = require("express").Router();
const {getHandler, postHandler, patchHandler, deleteHandler} = require("../controllers/productControl")
// get all products
router.get('/',getHandler);
// create product = post 
router.post('/',postHandler);
// delete product
router.delete('/:id',deleteHandler)
// update product
router.put('/:id',patchHandler);
module.exports=router
