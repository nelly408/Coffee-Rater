const express = require('express')
const app = express()
app.use(require('morgan')('dev'))
app.use(express.json())
const PORT = process.env.PORT || 8080
// const createTables = require('./db/seeding')
const client = require('./db/client')
const coffeeShopRouter = require('./api/coffeeShopRoutes')
const userRouter = require('./api/userProfileRoutes')



app.get("/", async(req, res, next)=>{
  res.send("Welcome to Coffee Rater")

})

const init = async()=>{
client.connect()
// await createTables()

console.log('data seeded')
app.use("/coffeeshops", coffeeShopRouter)
app.use("/users", userRouter)
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
}

init()