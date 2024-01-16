import mysql from "mysql";

export const connection = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
});

connection.connect((err) => {
    if (err) {
        console.error('Error at connecting db:', err);
        throw err;
    }
    console.log('MySQL successfully connected.');
});