import { Router } from "express";
import {
    getWords,
    insertWord,
    getRandoWord
} from "./words.controller.js";

export const router = Router();

router.get("/word/words", getWords);
router.post("/word/create", insertWord);
router.get("/word", getRandoWord);

router.get("/word/test", (req, res) => {
    res.send("Hello from word");
});