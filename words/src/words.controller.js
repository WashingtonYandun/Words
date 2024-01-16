import { connection } from "./db.js";

export const getWords = (req, res, next) => {
    connection.query("SELECT * FROM words", (err, results) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        res.json(results);
    });
}

export const insertWord = (req, res, next) => {
    const { word } = req.body;
    connection.query("INSERT INTO words (word) VALUES (?)", [word], (err, results) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        res.json(results);
    });
}