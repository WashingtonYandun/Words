import { Router } from "express";


export const router = Router();

router.post("/wordle/test", (req, res) => {
    res.send("Hello from wordle");
});