const express = require('express')
const userRouter = express.Router()
module.exports = userRouter
const {getUserRatings} = require('../db/queries/userprofile')


//base.com/productratings/:id
userRouter.get("/:user_id", async(req,res,next)=>{
    const user_id = req.params.user_id
    res.send(await getUserRatings(user_id))
})