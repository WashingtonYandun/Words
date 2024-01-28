import { Router } from "express";
import { updateGame } from "./hangman.controller.js";


export const router = Router();

router.post("/hangman/guess", updateGame);
router.post("/hangman/test", (req, res) => {
    res.send("Hello from hangman");
});