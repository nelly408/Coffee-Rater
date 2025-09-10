const client = require('../client')

const getAllCoffeeshops = async()=>{
    const SQL =`
        SELECT *
        FROM coffeeshops
        JOIN productratings on coffeeshops.id = coffeeshops_id;
    `
    const response = await client.query(SQL)
    return response.rows
}


const getOneCoffeeshop = async(id)=>{
    const SQL =`
        SELECT name, address from coffeeshops
        where id = $1;
    `
    const response = await client.query(SQL, [id])
    return {
        name: response.rows[0].name,
        address: response.rows[0].address,
    }
}

module.exports = {getAllCoffeeshops, getOneCoffeeshop}