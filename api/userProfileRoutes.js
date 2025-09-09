const express = require('express')
const userRouter = express.Router()
module.exports = userRouter

//base.com/users
userRouter.get("/",(req,res,next)=>{
    res.send("Hello!")
})


//base.com/user/:id
userRouter.get("/:id",(req,res,next)=>{
    res.send("Hello!")
})