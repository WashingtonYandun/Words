import { Router } from "express";
import { updateGame } from "./hangman.controller.js";


export const router = Router();

router.get("/hangman/guess/", updateGame);
router.get("/hangman/test", (req, res) => {
    res.send("Hello from hangman");
});