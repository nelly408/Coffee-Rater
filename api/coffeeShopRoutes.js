const express = require('express')
const coffeeShopRouter = express.Router()
module.exports = coffeeShopRouter
const {getAllCoffeeshops, getOneCoffeeshop} = require('../db/queries/coffeeshops')


//base.com/coffeeshops
coffeeShopRouter.get("/", async(req,res,next)=>{
    res.send(await getAllCoffeeshops())
})


//base.com/coffeeshops/:id
coffeeShopRouter.get("/:id", async(req,res,next)=>{
    const id = req.params.id
    res.send(await getOneCoffeeshop(id))
})