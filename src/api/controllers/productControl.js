// GET POST PATCH DELETE
const {getProducts, createProd, updateProd, deleteProd} = require('../services/producServ')

const getHandler=async(_req,res)=>{
    try{
     const products = await getProducts()
     res.status(200).json({message: "here are the products that we got : ", data: products})
    }catch{
        console.error("error 404");
    }
}
const postHandler=async(req,res)=>{
    const {title, description}=req.body
    const product = await createProd({title, description})
    if(!title||!description){
        res.status(401).send("you have to provide actual data")
    }
    res.status(201).json({message: "product successfully created", data: product})
}
const patchHandler=async(req,res)=>{
    const id = req.params
    const {title, description} = req.body
    if(!id){
       res.status(401).send("id: unprovided")
    }else if(!title||!description){
        res.status(401).send("unprovided data")
    }
    const product = await updateProd(id,title,description)
    res.status(201).json({message: "product successfully updated", data: product})
}
const deleteHandler =async()=>{
    const id = req.body
    try{
    const product = await deleteProd(id)
    res.status(201).json({message:"product successfully deleted", data:product})
    }catch{
        console.log(`error while deleting : ${error.message} `)
        res.status(401).json({message: "no id has been provided"})
    }
}

module.exports={getHandler,postHandler,patchHandler,deleteHandler}