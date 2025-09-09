const client = require('./client')
// client.connect()


const createTables = async ()=>{
    const SQL = `

    `
    await client.query(SQL);

}
module.exports = createTables

    // INSERT INTO productratings(user_id, product_id, coffeeshop_id, rating) VALUES (1, 2, 3, '4');
    // INSERT INTO productratings(user_id, product_id, coffeeshop_id, rating) VALUES (2, 3, 3, '3');
    // INSERT INTO productratings(user_id, product_id, coffeeshop_id, rating) VALUES (1, 4, 4, '5');
    // INSERT INTO productratings(user_id, product_id, coffeeshop_id, rating) VALUES (3, 1, 1, '2');


    
    // DROP TABLE IF EXISTS users;
    // DROP TABLE IF EXISTS products;
    // DROP TABLE IF EXISTS coffeeshops;
    // DROP TABLE IF EXISTS productratings;

    // CREATE TABLE users(
    // id serial PRIMARY KEY,
    // firstname text not null,
    // lastname text not null,
    // emailaddress text not null
    // );

    // CREATE TABLE products(
    // id serial PRIMARY KEY,
    // Latte text not null,
    // Drip text not null,
    // Cappucino text not null,
    // PourOver text not null
    // );

    // CREATE TABLE coffeeshops(
    // id serial PRIMARY KEY,
    // address text not null,
    // name text not null
    // );

    // CREATE TABLE productratings(
    // rating int not null,
    // user_id int REFERENCES users (id),
    // product_id int REFERENCES products (id),
    // coffeeshop_id int REFERENCES coffeeshops (id)
    // );

    // INSERT INTO users(firstname, lastname, emailaddress) VALUES ('Ben', 'Norman','bnorm@gmail.com');
    // INSERT INTO users(firstname, lastname, emailaddress) VALUES ('Annie', 'Wilson','awils@yahoo.com');
    // INSERT INTO users(firstname, lastname, emailaddress) VALUES ('John', 'Doe','jdoe@aol.com');