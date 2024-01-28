import { Router } from "express";
import {
    getWords,
    insertWord,
    getRandomWord
} from "./words.controller.js";

export const router = Router();

router.post("/word/words", getWords);
router.post("/word/create", insertWord);
router.post("/word/word", getRandomWord);

router.get("/word/test", (req, res) => {
    res.send("Hello from word");
});