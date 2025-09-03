const client = require('./client')
// client.connect()

const createTables = async ()=>{
    const SQL = `
    
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS coffeeshops;
    DROP TABLE IF EXISTS productratings;

    CREATE TABLE users(
    id serial PRIMARY KEY,
    firstname text not null,
    lastname text not null,
    emailaddress text not null
    );

    CREATE TABLE products(
    id serial PRIMARY KEY,
    Latte text not null,
    Drip text not null,
    Cappucino text not null,
    PourOver text not null
    );

    CREATE TABLE coffeeshops(
    id serial PRIMARY KEY,
    address text not null,
    name text not null
    );

    CREATE TABLE productratings(
    rating int not null,
    user_id int REFERENCES users (id),
    product_id int REFERENCES products (id),
    coffeeshop_id int REFERENCES coffeeshops (id)
    );

    INSERT INTO coffeeshops(address, name) VALUES ('315 S 1st St, San Jose, CA 95113', 'Nirvana Soul Coffee');
    INSERT INTO coffeeshops(address, name) VALUES ('101 E Santa Clara St, San Jose, CA 95113', 'Con Azucar Cafe');
    INSERT INTO coffeeshops(address, name) VALUES ('499 S Second St, San Jose, CA 95113', 'Academic Coffee');
    INSERT INTO coffeeshops(address, name) VALUES ('360 S Market St #80, San Jose, CA 95113', 'Voltaire Coffee Roasters');
    INSERT INTO coffeeshops(address, name) VALUES ('368 Santana Row Suite 1020, San Jose, CA 95128', 'Blue Bottle Coffee');
    INSERT INTO coffeeshops(address, name) VALUES ('28 N Almaden Ave Suite 40, San Jose, CA 95110', 'Dumont Creamery & Café');

    `
    await client.query(SQL);

}
module.exports = createTables
