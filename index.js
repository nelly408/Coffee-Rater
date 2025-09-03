const express = require('express')
const app = express()
app.use(require('morgan')('dev'))
app.use(express.json())
const PORT = process.env.PORT || 8080
const createTables = require('./db/seeding')
const client = require('./db/client')

const init = async()=>{
client.connect()
await createTables()

console.log('data seeded')

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
}

init()