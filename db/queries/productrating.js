const client = require('../client')

const createRating = async(user_id, product_id, coffeeshop_id, rating)=>{
    const SQL =`
        INSERT INTO productratings(user_id, product_id, coffeeshop_id, rating) VALUES ($1, $2, $3)
        RETURNING * ;
    `
    const response = await client.query(SQL, [user_id, product_id, coffeeshop_id, rating])
    return response.rows[0]
}

const updateRating = async(user_id, product_id, coffeeshop_id, rating)=>{
    const SQL =`
        UPDATE productratings
        SET rating = $4
        WHERE id = $3
        RETURNING *
    `
    const response = await client.query(SQL, [user_id, product_id, coffeeshop_id, rating])
    return response.rows[0]
}

const deleteRating = async(user_id, product_id, coffeeshop_id, rating)=>{
    const SQL =`
        DELETE from productratings
        WHERE id = $3;
    `
    const response = await client.query(SQL, [user_id, product_id, coffeeshop_id, rating])
    return response.rows[0]
}


module.exports = {createRating, updateRating, deleteRating}