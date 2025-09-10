const express = require('express')
const userRouter = express.Router()
module.exports = userRouter
const {getUserRatings} = require('../db/queries/userprofile')


//base.com/user/:id
userRouter.get("/:id", async(req,res,next)=>{
    res.send(await getUserRatings())
})