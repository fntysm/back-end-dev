const Product = require("../modules/product");

const getProducts=async()=>{
    try{
      const products = await Product.find()
      return products
    }catch{
        console.error("something went wrong while getting products");
    }
}
const createProd=async()=>{
    try{
      const products = new Product({title,description})
      await products.save()
      return products
    }catch{
        res.status(500).json({message: "something went wrong while creating the product"})
        console.log(`result of operation: ${error.message}"`)
    }
}
const deleteProd=async(id)=>{
    try{
       const products = await Product.findByIdAndDelete(id)
    }catch{
        console.log(`the result of the operation: ${error.message}`)
        res.status(500).json({message: "something went wrong while deleting the product"})
    }
}

module.exports={getProducts,createProd,deleteProd,updateProd}