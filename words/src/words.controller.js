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
        res.status(500).send(">> WORDS == Something went wrong!");
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
        res.status(500).send(">> WORDS == Something went wrong!");
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
        res.status(500).send(">> WORDS == Something went wrong!");
    }
}