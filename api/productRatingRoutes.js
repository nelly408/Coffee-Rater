const express = require('express')
const productRatingRouter = express.Router()
module.exports = productRatingRouter
const {updateRating, createRating, deleteRating} = require('../db/queries/productratings')

productRatingRouter.put("/", async(req,res,next)=>{
    res.send(await updateRating())
})

productRatingRouter.post("/", async(req,res,next)=>{
    res.send(await createRating())
})


productRatingRouter.delete("/", async(req,res,next)=>{
    res.send(await deleteRating())
})