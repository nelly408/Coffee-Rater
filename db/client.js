const pg = require('pg')

const client = new pg.Client({
  user: 'AlexR',
  password: 'Simon1228!!',
  host: 'localhost',
  port: 5432,
  database: 'coffeerater',
})
module.exports = client












