import mysql from "mysql";

let host = process.env.host
let user = process.env.user
let password = process.env.password
let database = process.env.database


export const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
});

connection.connect((err) => {
    if (err) {
        console.error('Error at connecting db:', err);
        throw err;
    }
    console.log('MySQL successfully connected.');
});