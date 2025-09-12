const client = require('../client')

const getUserRatings = async(user_id)=>{
    const SQL =`
        SELECT *
        FROM productratings
        where user_id = $1;
    `
    const response = await client.query(SQL, [user_id])
    return response.rows
}

module.exports = {getUserRatings}