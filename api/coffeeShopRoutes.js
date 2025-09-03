const express = require('express')
const coffeeShopRouter = express.Router()
module.exports = coffeeShopRouter

//base.com/coffeeshops
coffeeShopRouter.get("/",(req,res,next)=>{
    res.send("Hello!")
})


//base.com/coffeeshops/:id
coffeeShopRouter.get("/:id",(req,res,next)=>{
    res.send("Hello!")
})