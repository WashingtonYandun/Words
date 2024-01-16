import { Router } from "express";
import {
    getWords,
    insertWord,
} from "./words.controller.js";

export const router = Router();

router.get("/words", getWords);
router.post("/word", insertWord);