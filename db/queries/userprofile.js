const client = require('../client')

const getUserRatings = async(user_id, product_id, coffeeshop_id, rating)=>{
    const SQL =`
        SELECT *
        FROM productratings
        where id = $1
    `
    const response = await client.query(SQL, [user_id, product_id, coffeeshop_id, rating])
    return response.rows
}

module.exports = {getUserRatings}