import { Router } from "express";
import { updateGame } from "./hangman.controller.js";


export const router = Router();

router.post("/hangman/guess", updateGame);
router.post("/hangman/test", (req, res) => {
    console.log(req.body);
    try {
        console.log("HANGMAN TEST");
        res.json({
            message: "HANGMAN TEST"
        });
    }
    catch (error) {
        console.log(error);
    }
});