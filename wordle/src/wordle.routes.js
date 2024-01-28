import { Router } from "express";
import { updateGame } from "./wordle.controller.js";

export const router = Router();

router.post("/wordle/guess", updateGame);
router.post("/wordle/test", (req, res) => {
    res.send("Hello from wordle");
});