import { connection } from "./db.js";

export const getWords = (req, res, next) => {
    try {
        connection.query("SELECT * FROM words", (err, results) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            res.json(results);
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export const insertWord = (req, res, next) => {
    try {
        const { word } = req.body;
        connection.query("INSERT INTO words (word) VALUES (?)", [word], (err, results) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            res.json(results);
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export const getRandomWord = (req, res, next) => {
    try {
        connection.query("SELECT * FROM words ORDER BY RAND() LIMIT 1", (err, results) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            res.json(results);
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}