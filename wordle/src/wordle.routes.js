import { Router } from "express";


export const router = Router();

router.get("/wordle/test", (req, res) => {
    res.send("Hello from wordle");
});